import { FC } from "react"
import FlatList from "../../components/Flats/FlatList/FlatList"
import MainPanel from "../../components/MainPanel/MainPanel"
import Sidebar from "../../components/SidebarBlock/SideBar/Sidebar"
import MainLayout from "../../layouts/MainLayout/MainLayout"

import "./Main.scss"

const Main: FC = (): JSX.Element => {
  return (
    <MainLayout title="Flats">
      <main className="Main">
        <div className="Main__content">
          <MainPanel />
          <FlatList />
        </div>
        <Sidebar />
      </main>
    </MainLayout>
  )
}

export default Main
