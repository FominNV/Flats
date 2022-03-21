import { FC, ReactNode, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../store/selectors"
import { setFilteredFlats } from "../../../store/flat/actions"
import FlatCard from "../FlatCard/FlatCard"
import { IFlat } from "../../../store/flat/types"

import "./FlatList.scss"

const FlatList: FC = (): JSX.Element => {
  const { flats, filters } = useTypedSelector((state) => state.flat)
  const dispatch = useDispatch()

  const showFlats = (flats: IFlat[]): ReactNode => {
    return flats.map((flat: IFlat, i: number) => <FlatCard key={Date.now() + i} flat={flat} />)
  }

  const filterByCountRoom = (flats: IFlat[], filter: string): IFlat[] | [] => {
    switch (filter) {
      case "C":
        return flats.filter((flat: IFlat) => flat.planLink === "C")

      case "1": {
        return flats.filter((flat: IFlat) => flat.planLink === "1")
      }

      case "1+": {
        return flats.filter((flat: IFlat) => parseInt(flat.planLink) >= 1)
      }

      case "2": {
        return flats.filter((flat: IFlat) => flat.planLink === "2")
      }

      case "2+": {
        return flats.filter((flat: IFlat) => parseInt(flat.planLink) >= 2)
      }

      case "3": {
        return flats.filter((flat: IFlat) => flat.planLink === "3")
      }

      case "3+": {
        return flats.filter((flat: IFlat) => parseInt(flat.planLink) >= 3)
      }

      case "4...": {
        return flats.filter((flat: IFlat) => parseInt(flat.planLink) >= 4)
      }
    }
  }

  const filterByMinSquare = (flats: IFlat[], filter: number): IFlat[] | [] => {
    return flats.filter((flat: IFlat) => flat.squares >= filter)
  }

  const filterByMaxSquare = (flats: IFlat[], filter: number): IFlat[] | [] => {
    return flats.filter((flat: IFlat) => flat.squares <= filter)
  }

  const filterByMinPrice = (flats: IFlat[], filter: number): IFlat[] | [] => {
    return flats.filter((flat: IFlat) => flat.minPrice >= filter)
  }

  const filterByMaxPrice = (flats: IFlat[], filter: number): IFlat[] | [] => {
    return flats.filter((flat: IFlat) => flat.minPrice <= filter)
  }

  const filterFlats = (flats: IFlat[]): IFlat[] | [] => {
    if (filters.countRoom) {
      flats = filterByCountRoom(flats, filters.countRoom)
    }

    if (filters.minSquare) {
      flats = filterByMinSquare(flats, filters.minSquare)
    }

    if (filters.maxSquare) {
      flats = filterByMaxSquare(flats, filters.maxSquare)
    }

    if (filters.minPrice) {
      flats = filterByMinPrice(flats, filters.minPrice)
    }

    if (filters.maxPrice) {
      flats = filterByMaxPrice(flats, filters.maxPrice)
    }

    return flats
  }

  useEffect(() => {
    if (
      filters.countRoom ||
      filters.maxPrice ||
      filters.maxSquare ||
      filters.minPrice ||
      filters.minSquare
    ) {
      dispatch(setFilteredFlats(filterFlats(flats.all)))
    }
  }, [filters])

  return (
    <div className="FlatList">
      {flats.filtered ? showFlats(flats.filtered) : showFlats(flats.all)}
    </div>
  )
}

export default FlatList
