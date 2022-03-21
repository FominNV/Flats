import { FC } from "react"
import { ICheckBoxProps } from "./CheckBoxTypes"

import "./CheckBox.scss"

const CheckBox: FC<ICheckBoxProps> = ({ label, id }): JSX.Element => {
  return (
    <label htmlFor={id} className="CheckBox">
      <input id={id} type="checkbox" className="CheckBox__box" />

      <div className="CheckBox__custom"></div>

      <p className="CheckBox__text">{label}</p>
    </label>
  )
}

export default CheckBox
