import { FC, ReactNode, useState } from "react"
import CheckBox from "../CheckBox/CheckBox"
import SidebarTitle from "../SidebarTitle/SidebarTitle"
import ShowMoreBtn from "../Buttons/ShowMoreBtn/ShowMoreBtn"
import { ICheckBoxBlockProps } from "./CheckBoxBlockTypes"

import "./CheckBoxBlock.scss"

const CheckBoxBlock: FC<ICheckBoxBlockProps> = ({ title, data, id }): JSX.Element => {
  const [showMore, setShowMore] = useState<boolean>(false)

  const showCheckboxes = (data: string[]): ReactNode => {
    return data.map((elem: string, i: number) => <CheckBox key={i} id={id + i} label={elem} />)
  }

  return (
    <div className="CheckBoxBlock">
      <SidebarTitle title={title} />
      <div className={`CheckBoxBlock__boxes ${showMore && "CheckBoxBlock__boxes_active"}`}>
        {showCheckboxes(data)}
      </div>
      {data.length > 6 && <ShowMoreBtn stateValue={showMore} setState={setShowMore} />}
    </div>
  )
}

export default CheckBoxBlock
