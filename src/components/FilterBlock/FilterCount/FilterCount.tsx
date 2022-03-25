import { FC, useEffect } from "react"
import { useTypedSelector } from "../../../store/selectors"

import "./FilterCount.scss"

const FilterCount: FC = (): JSX.Element => {
  const { filters } = useTypedSelector((state) => state.flat)

  const countFilters = (data: (string | number)[]): number => {
    let count = 0

    data.map((elem: string | number) => {
      if (elem !== null) count++
    })

    return count
  }

  useEffect(() => {
    countFilters(Object.values(filters))
  }, [filters])

  return <div className="FilterCount">{countFilters(Object.values(filters))}</div>
}

export default FilterCount
