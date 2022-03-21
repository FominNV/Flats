import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../store/selectors"
import { removeFilters, setFilteredFlats } from "../../store/flat/actions"
import FilterCount from "../FilterBlock/FilterCount/FilterCount"
import FilterPoint from "../FilterBlock/FilterPoint/FilterPoint"
import Order from "../Order/Order"
import Scheme from "../Scheme/Scheme"

import "./MainPanel.scss"

const MainPanel: FC = (): JSX.Element => {
  const { flats } = useTypedSelector((state) => state.flat)
  const dispatch = useDispatch()

  const clearFilters = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(removeFilters())
    dispatch(setFilteredFlats(null))
  }

  return (
    <div className="MainPanel">
      <div className="MainPanel__result">
        <h3 className="MainPanel__count">{`Найдено ${
          flats.filtered ? flats.filtered.length : flats.all.length
        } планировок`}</h3>
        <div className="MainPanel__clear">
          <FilterCount count={0} />

          <p className="MainPanel__clear_text">Фильтр</p>

          <button className="MainPanel__clear_btn" onClick={clearFilters}>
            Сбросить все
          </button>
        </div>
      </div>

      <FilterPoint />
      <div className="MainPanel__show">
        <Order />
        <Scheme />
      </div>
    </div>
  )
}

export default MainPanel
