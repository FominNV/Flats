import { FC } from "react"
import { IFilterCountProps } from "./FilterCountTypes"

import "./FilterCount.scss"

const FilterCount: FC<IFilterCountProps> = ({ count }): JSX.Element => {
  return <div className="FilterCount">{count}</div>
}

export default FilterCount
