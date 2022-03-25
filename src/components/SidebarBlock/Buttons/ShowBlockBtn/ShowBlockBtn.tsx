import React, { FC } from "react"
import { IShowBlockBtnProps } from "./ShowBlockBtnTypes"

import "./ShowBlockBtn.scss"

const ShowBlockBtn: FC<IShowBlockBtnProps> = ({ name, setState, stateValue }): JSX.Element => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setState(!stateValue)
  }

  return (
    <button
      className={`ShowBlockBtn ${stateValue && "ShowBlockBtn_active"}`}
      onClick={onClickHandler}
    >
      {name}
    </button>
  )
}

export default ShowBlockBtn
