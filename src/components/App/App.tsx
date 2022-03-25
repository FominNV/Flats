import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Main from "../../pages/Main/Main"

import "./App.scss"

const App: FC = (): JSX.Element => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
