import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { IMainLayoutProps } from "./MainLayoutTypes"
import Container from "../../components/Container/Container"

import "./MainLayout.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children, title }): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="MainLayout">
        <Container>{children}</Container>
      </div>
    </>
  )
}

export default MainLayout
