import { FC } from "react"
import { IShowMoreBtnProps } from "./ShowMoreBtnTypes"

import { ReactComponent as Arrow } from "../../../../content/icons/ShowMoreBtn/arrow.svg"

import "./ShowMoreBtn.scss"

const ShowMoreBtn: FC<IShowMoreBtnProps> = ({ setState, stateValue }): JSX.Element => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setState(!stateValue)
  }

  return (
    <div className="ShowMoreBtn">
      <button onClick={onClickHandler} className="ShowMoreBtn__btn">
        {stateValue ? "Скрыть" : "Показать все"}
      </button>
      <div className={`ShowMoreBtn__arrow ${stateValue && "active"}`}>
        <Arrow />
      </div>
    </div>
  )
}

export default ShowMoreBtn
