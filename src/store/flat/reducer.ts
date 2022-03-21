import dataFlat from "../../content/data/dataFlat"
import { CARD_SHOW_MODE, FlatAction, FlatActionTypes, IFlatState, SORT_MODE } from "./types"

const initialState: IFlatState = {
  flats: {
    all: dataFlat,
    filtered: null
  },
  filters: {
    countRoom: null,
    minSquare: null,
    maxSquare: null,
    minPrice: null,
    maxPrice: null
  },
  cardShowMode: CARD_SHOW_MODE.CARD
}

export function flatReducer(state: IFlatState = initialState, action: FlatAction): IFlatState {
  switch (action.type) {
    case FlatActionTypes.SET_COUNT_ROOM_FILTER:
      return {
        ...state,
        filters: { ...state.filters, countRoom: action.payload.countRoom }
      }

    case FlatActionTypes.SET_MIN_SQARE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, minSquare: action.payload.minSquare }
      }

    case FlatActionTypes.SET_MAX_SQARE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, maxSquare: action.payload.maxSquare }
      }

    case FlatActionTypes.SET_MIN_PRICE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, minPrice: action.payload.minPrice }
      }

    case FlatActionTypes.SET_MAX_PRICE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, maxPrice: action.payload.maxPrice }
      }

    case FlatActionTypes.REMOVE_FILTERS:
      return {
        ...state,
        filters: {
          countRoom: null,
          minSquare: null,
          maxSquare: null,
          minPrice: null,
          maxPrice: null
        }
      }

    case FlatActionTypes.SET_CARD_SHOW_MODE:
      return {
        ...state,
        cardShowMode: action.payload.cardShowMode
      }

    case FlatActionTypes.SORT_FLATS:
      return {
        ...state,
        flats: {
          ...state.flats,
          all: action.payload.sortFlats
        }
      }

    case FlatActionTypes.SORT_FILTERED_FLATS:
      return {
        ...state,
        flats: {
          ...state.flats,
          filtered: action.payload.sortFlats
        }
      }

    case FlatActionTypes.SET_FILTERED_FLATS:
      return {
        ...state,
        flats: {
          ...state.flats,
          filtered: action.payload.filteredFlats
        }
      }

    default:
      return state
  }
}
