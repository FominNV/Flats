import { FC, useState } from "react"
import { useTypedSelector } from "../../../store/selectors"
import usePlanFlat from "../../../hooks/usePlanFlat"
import useNumberFormat from "../../../hooks/useNumberFormat"
import { IFlatCardProps } from "./FlatCardTypes"
import { CARD_SHOW_MODE } from "../../../store/flat/types"

import { ReactComponent as Heart } from "../../../content/icons/FlatCard/heart.svg"

import "./FlatCard.scss"

const FlatCard: FC<IFlatCardProps> = ({ flat }): JSX.Element => {
  const { cardShowMode } = useTypedSelector((state) => state.flat)
  const [favorited, setFavorited] = useState<Boolean>(false)

  const setFavoriteFlat = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setFavorited(!favorited)
  }

  return (
    <div className={`FlatCard ${cardShowMode === CARD_SHOW_MODE.ROW && "row"}`}>
      <div className="FlatCard__content">
        <div className="FlatCard__img-wrap">
          <img className="FlatCard__img" src={flat.photos[0]} alt={flat.name} />
        </div>

        <div className="FlatCard__pages">
          <button className="FlatCard__pages_btn"></button>
          <button className="FlatCard__pages_btn"></button>
          <button className="FlatCard__pages_btn"></button>
          <button className="FlatCard__pages_btn"></button>
          <button className="FlatCard__pages_btn"></button>
        </div>

        <div className="FlatCard__info">
          <h4>{`${usePlanFlat(flat.planLink)}, ${flat.squares} м²`}</h4>
          <button onClick={setFavoriteFlat} className={`FlatCard__heart ${favorited && "active"}`}>
            <Heart />
          </button>
        </div>

        <div className="FlatCard__place">{flat.housingComplexName}</div>

        <div className="FlatCard__summary">{`${
          flat.sameLayoutFlatCount
        } квартир · от ${useNumberFormat(flat.minPrice, "million")} млн ₽`}</div>

        <button className="FlatCard__btn">Выберети свою</button>
      </div>
    </div>
  )
}

export default FlatCard
