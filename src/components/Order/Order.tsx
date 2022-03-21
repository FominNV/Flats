import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../store/selectors"
import { sortFilteredFlats, sortFlats } from "../../store/flat/actions"
import { SORT_MODE } from "../../store/flat/types"

import "./Order.scss"

const Order: FC = (): JSX.Element => {
  const { flats } = useTypedSelector((state) => state.flat)
  const dispatch = useDispatch()

  const setOrderSortFlats = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    switch (e.target.value) {
      case "cheap": {
        if (flats.filtered) {
          dispatch(sortFilteredFlats(flats.filtered))
        } else {
          dispatch(sortFlats(flats.all))
        }
        return
      }

      case "expensive": {
        if (flats.filtered) {
          dispatch(sortFilteredFlats(flats.filtered, SORT_MODE.EXPENSIVE_START))
        } else {
          dispatch(sortFlats(flats.all, SORT_MODE.EXPENSIVE_START))
        }
      }
    }
  }

  return (
    <div className="Order">
      <select name="order" className="Order__select" onChange={setOrderSortFlats}>
        <option value="cheap">Сначала дешевые</option>
        <option value="expensive">Сначала дорогие</option>
      </select>
    </div>
  )
}

export default Order
