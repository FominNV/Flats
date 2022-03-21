import React from "react"

export interface IFilterBtnProps {
  title: string
  logo?: string
  width?: string
  setFilter?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
