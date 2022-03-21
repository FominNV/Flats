import { FC, ReactNode, useEffect } from "react"
import { useTypedSelector } from "../../../store/selectors"
import useNumberFormat from "../../../hooks/useNumberFormat"

import "./FilterPoint.scss"

const FilterPoint: FC = (): JSX.Element => {
  const { filters } = useTypedSelector((state) => state.flat)

  const showPoints = (points: string[]): ReactNode => {
    return points.map((elem: string, i: number) => (
      <button key={i} className="FilterPoint__item">
        {elem}
      </button>
    ))
  }

  const createPoints = (): string[] => {
    const points = []

    if (filters.countRoom) {
      points.push(`Количество комнат: ${filters.countRoom}`)
    }

    if (filters.minSquare) {
      points.push(`От ${filters.minSquare} м²`)
    }

    if (filters.maxSquare) {
      points.push(`До ${filters.maxSquare} м²`)
    }

    if (filters.minPrice) {
      points.push(`От ${useNumberFormat(filters.minPrice, "million")} млн`)
    }

    if (filters.maxPrice) {
      points.push(`До ${useNumberFormat(filters.maxPrice, "million")} млн`)
    }

    return points
  }

  useEffect(() => {
    showPoints(createPoints())
  }, [filters])

  return <div className="FilterPoint">{showPoints(createPoints())}</div>
}

export default FilterPoint
