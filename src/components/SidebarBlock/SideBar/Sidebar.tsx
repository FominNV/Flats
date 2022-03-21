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
      <ButtonBlock title="Количество комнат" data={dataCountRoom} setFilter={setCountRoom} />
      <CheckBoxBlock id="layoutRoom" title="Особенности планировки" data={dataLayoutFlat} />
      <ButtonBlock title="Проект" btnBlockName="Выбрать на карте" data={dataProject} />
      <ButtonBlock
        title="Дом"
        btnBlockName="Выбрать на генплане"
        data={dataProject}
        showBlock={false}
      />
      {minPrice && maxPrice && (
        <RangeBlock
          title="Стоимость, ₽"
          min={minPrice}
          max={maxPrice}
          step={1000}
          setMin={addMinPriceFilter}
          setMax={addMaxPriceFilter}
        />
      )}
      {minSquare && maxSquare && (
        <RangeBlock
          title="Площадь, м²"
          min={minSquare}
          max={maxSquare}
          step={0.1}
          mode="square"
          setMin={addMinSquareFilter}
          setMax={addMaxSquareFilter}
        />
      )}
      <ButtonBlock title="Срок сдачи" data={dataDeadline} />
      <CheckBoxBlock id="viewWindow" title="Особенности планировки" data={dataViewWindow} />
      <ButtonBlock title="Высота потолков, м" data={dataCeilHeight} />
      <CheckBoxBlock id="advantageFlat" title="Преимущества квартиры" data={dataAdvantageFlat} />
      <CheckBoxBlock id="advantageHouse" title="Преимущества дома" data={dataAdvantageHouse} />
      <CheckBoxBlock id="infrastructure" title="Инфраструктура" data={dataInfrastructure} />
      <CheckBoxBlock id="houseFormat" title="Формат дома" data={dataHouseFormat} />
    </div>
  )
}

export default Sidebar
