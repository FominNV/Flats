import { FC, ReactNode, useState } from "react"
import SidebarTitle from "../SidebarTitle/SidebarTitle"
import FilterBtn from "../Buttons/FilterBtn/FilterBtn"
import ShowBlockBtn from "../Buttons/ShowBlockBtn/ShowBlockBtn"
import { IButtonBlockProps } from "./ButtonBlockTypes"
import { IFilterBtnProps } from "../Buttons/FilterBtn/FilterBtnTypes"

import "./ButtonBlock.scss"

const ButtonBlock: FC<IButtonBlockProps> = ({
  title,
  btnBlockName,
  data,
  setFilter,
  showBlock = true
}): JSX.Element => {
  const [showButtons, setShowButtons] = useState<boolean>(showBlock)

  const showProjectFilters = (data: IFilterBtnProps[]): ReactNode => {
    return data.map((elem: IFilterBtnProps, i: number) => (
      <FilterBtn
        key={i}
        title={elem.title}
        logo={elem.logo}
        width={elem.width}
        setFilter={setFilter}
      />
    ))
  }

  return (
    <div className="ButtonBlock">
      <div className="ButtonBlock__title">
        <SidebarTitle title={title} />
        {btnBlockName && (
          <ShowBlockBtn name={btnBlockName} setState={setShowButtons} stateValue={showButtons} />
        )}
      </div>
      <div className={`ButtonBlock__buttons ${showButtons && "ButtonBlock__buttons_active"}`}>
        {showProjectFilters(data)}
      </div>
    </div>
  )
}

export default ButtonBlock
