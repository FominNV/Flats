import { FC } from "react"
import { ISidebarTitleProps } from "./SidebarTitleTypes"

import "./SidebarTitle.scss"

const SidebarTitle: FC<ISidebarTitleProps> = ({ title }): JSX.Element => {
  return <h5 className="SidebarTitle">{title}</h5>
}

export default SidebarTitle
