import { FC } from "react"
import Range from "../Range/Range"
import SidebarTitle from "../SidebarTitle/SidebarTitle"
import { IRangeBlockProps } from "./RangeBlockTypes"

import "./RangeBlock.scss"

const RangeBlock: FC<IRangeBlockProps> = ({
  title,
  min,
  max,
  step,
  mode,
  setMin,
  setMax
}): JSX.Element => {
  return (
    <div className="RangeBlock">
      <SidebarTitle title={title} />
      <Range min={min} max={max} step={step} mode={mode} setMin={setMin} setMax={setMax} />
    </div>
  )
}

export default RangeBlock
