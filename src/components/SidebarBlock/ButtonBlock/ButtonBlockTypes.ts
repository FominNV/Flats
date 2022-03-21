import { IFilterBtnProps } from "../Buttons/FilterBtn/FilterBtnTypes"

export interface IButtonBlockProps {
  title: string
  btnBlockName?: string
  showBlock?: boolean
  data: IFilterBtnProps[]
  setFilter?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
