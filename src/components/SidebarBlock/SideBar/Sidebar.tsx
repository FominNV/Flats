import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import CheckBoxBlock from "../CheckBoxBlock/CheckBoxBlock"
import RangeBlock from "../RangeBlock/RangeBlock"
import ButtonBlock from "../ButtonBlock/ButtonBlock"
import {
  setCountRoomFilter,
  setMaxPriceFilter,
  setMaxSquareFilter,
  setMinPriceFilter,
  setMinSquareFilter
} from "../../../store/flat/actions"

import dataLayoutFlat from "../../../content/data/dataLayoutFlat"
import dataProject from "../../../content/data/dataProject"
import dataCountRoom from "../../../content/data/dataCountRoom"
import dataDeadline from "../../../content/data/dataDeadline"
import dataViewWindow from "../../../content/data/dataViewWindow"
import dataCeilHeight from "../../../content/data/dataCeilHeight"
import dataAdvantageFlat from "../../../content/data/dataAdvantageFlat"
import dataAdvantageHouse from "../../../content/data/dataAdvantageHouse"
import dataInfrastructure from "../../../content/data/dataInfrastructure"
import dataHouseFormat from "../../../content/data/dataHouseFormat"
import { useTypedSelector } from "../../../store/selectors"
import { IFlat } from "../../../store/flat/types"

import "./SideBar.scss"

const Sidebar: FC = (): JSX.Element => {
  const { flats } = useTypedSelector((state) => state.flat)
  const [minSquare, setMinSquare] = useState<number>(0)
  const [maxSquare, setMaxSquare] = useState<number>(0)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)

  const dispatch = useDispatch()

  const setCountRoom = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(setCountRoomFilter(e.currentTarget.name))
  }

  const addMinSquareFilter = (value: number): void => {
    dispatch(setMinSquareFilter(value))
    console.log("Up", value)
  }

  const addMaxSquareFilter = (value: number): void => {
    dispatch(setMaxSquareFilter(value))
  }

  const addMinPriceFilter = (value: number): void => {
    dispatch(setMinPriceFilter(value))
  }

  const addMaxPriceFilter = (value: number): void => {
    dispatch(setMaxPriceFilter(value))
  }

  useEffect(() => {
    const sortFlats: IFlat[] = flats.all

    sortFlats.sort((a: IFlat, b: IFlat) => a.minPrice - b.minPrice)
    setMinPrice(sortFlats[0].minPrice)

    sortFlats.sort((a: IFlat, b: IFlat) => b.minPrice - a.minPrice)
    setMaxPrice(sortFlats[0].minPrice)

    sortFlats.sort((a: IFlat, b: IFlat) => a.squares - b.squares)
    setMinSquare(sortFlats[0].squares)

    sortFlats.sort((a: IFlat, b: IFlat) => b.squares - a.squares)
    setMaxSquare(sortFlats[0].squares)
  }, [])

  return (
    <div className="Sidebar">
      <ButtonBlock title="???????????????????? ????????????" data={dataCountRoom} setFilter={setCountRoom} />
      <CheckBoxBlock id="layoutRoom" title="?????????????????????? ????????????????????" data={dataLayoutFlat} />
      <ButtonBlock title="????????????" btnBlockName="?????????????? ???? ??????????" data={dataProject} />
      <ButtonBlock
        title="??????"
        btnBlockName="?????????????? ???? ????????????????"
        data={dataProject}
        showBlock={false}
      />
      {minPrice && maxPrice && (
        <RangeBlock
          title="??????????????????, ???"
          min={minPrice}
          max={maxPrice}
          step={1000}
          setMin={addMinPriceFilter}
          setMax={addMaxPriceFilter}
        />
      )}
      {minSquare && maxSquare && (
        <RangeBlock
          title="??????????????, ????"
          min={minSquare}
          max={maxSquare}
          step={0.1}
          mode="square"
          setMin={addMinSquareFilter}
          setMax={addMaxSquareFilter}
        />
      )}
      <ButtonBlock title="???????? ??????????" data={dataDeadline} />
      <CheckBoxBlock id="viewWindow" title="?????????????????????? ????????????????????" data={dataViewWindow} />
      <ButtonBlock title="???????????? ????????????????, ??" data={dataCeilHeight} />
      <CheckBoxBlock id="advantageFlat" title="???????????????????????? ????????????????" data={dataAdvantageFlat} />
      <CheckBoxBlock id="advantageHouse" title="???????????????????????? ????????" data={dataAdvantageHouse} />
      <CheckBoxBlock id="infrastructure" title="????????????????????????????" data={dataInfrastructure} />
      <CheckBoxBlock id="houseFormat" title="???????????? ????????" data={dataHouseFormat} />
    </div>
  )
}

export default Sidebar
