import { FC } from "react"
import { IFilterBtnProps } from "./FilterBtnTypes"

import "./FilterBtn.scss"

const FilterBtn: FC<IFilterBtnProps> = ({ title, logo, width, setFilter }): JSX.Element => {
  return (
    <button name={title} className="FilterBtn" style={{ width }} onClick={setFilter}>
      {logo && <img src={logo} alt="logo" className="FilterBtn__img" />}
      <div className="FilterBtn__title">{title}</div>
    </button>
  )
}

export default FilterBtn
