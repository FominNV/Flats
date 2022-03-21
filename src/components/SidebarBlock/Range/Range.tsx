import React, { FC, useState } from "react"
import useNumberFormat from "../../../hooks/useNumberFormat"
import { IRangeProps } from "./RangeTypes"

import Slider from "rc-slider"
import "rc-slider/assets/index.css"

import "./Range.scss"

const Range: FC<IRangeProps> = ({ min, max, step, mode, setMin, setMax }): JSX.Element => {
  const [minState, setMinState] = useState<number>(min)
  const [maxState, setMaxState] = useState<number>(max)
  const [from, setFrom] = useState<string>(`от ${useNumberFormat(min, mode)}`)
  const [to, setTo] = useState<string>(`до ${useNumberFormat(max, mode)}`)

  const setValues = (value: any): void => {
    setFrom(`от ${useNumberFormat(value[0], mode)}`)
    setMinState(value[0])

    setTo(`до ${useNumberFormat(value[1], mode)}`)
    setMaxState(value[1])
  }

  const onMouseUpHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (minState !== min) {
      setMin(minState)
    } else if (minState === min) {
      setMin(null)
    }

    if (maxState !== max) {
      setMax(maxState)
    } else if (maxState === max) {
      setMax(null)
    }
  }

  return (
    <div className="Range">
      <div className="Range__inputs">
        <input type="text" readOnly name="from" className="Range__inputs_item" value={from} />
        <input type="text" readOnly name="to" className="Range__inputs_item" value={to} />
      </div>

      <div className="Range__slider" onMouseUp={onMouseUpHandler}>
        <Slider
          range
          allowCross={false}
          min={min}
          max={max}
          defaultValue={[min, max]}
          step={step}
          onChange={setValues}
        />
      </div>
    </div>
  )
}

export default Range
