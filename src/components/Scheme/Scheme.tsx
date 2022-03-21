import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../store/selectors"
import { setCardShowMode } from "../../store/flat/actions"
import { CARD_SHOW_MODE } from "../../store/flat/types"

import { ReactComponent as Row } from "../../content/icons/Scheme/row.svg"
import { ReactComponent as Card } from "../../content/icons/Scheme/card.svg"

import "./Scheme.scss"

const Scheme: FC = (): JSX.Element => {
  const { cardShowMode } = useTypedSelector((state) => state.flat)
  const dispatch = useDispatch()

  const setCardMode = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.name === "row") {
      dispatch(setCardShowMode(CARD_SHOW_MODE.ROW))
    } else if (e.currentTarget.name === "card") {
      dispatch(setCardShowMode(CARD_SHOW_MODE.CARD))
    }
  }

  return (
    <div className="Scheme">
      <button
        onClick={setCardMode}
        name="row"
        className={`Scheme__row ${cardShowMode === CARD_SHOW_MODE.ROW && "active"}`}
      >
        <Row />
      </button>
      <button
        onClick={setCardMode}
        name="card"
        className={`Scheme__card ${cardShowMode === CARD_SHOW_MODE.CARD && "active"}`}
      >
        <Card />
      </button>
    </div>
  )
}

export default Scheme
