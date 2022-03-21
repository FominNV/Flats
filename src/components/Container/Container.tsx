import { FC } from "react"
import { IContainerProps } from "./ContainerTypes"

import "./Container.scss"

const Container: FC<IContainerProps> = ({ children }): JSX.Element => {
  return <div className="Container">{children}</div>
}

export default Container
