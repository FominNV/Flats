export interface IFlatState {
  flats: {
    all: IFlat[] | null
    filtered: IFlat[] | null
  }
  filters: {
    countRoom: string | null
    minSquare: number | null
    maxSquare: number | null
    minPrice: number | null
    maxPrice: number | null
  }
  cardShowMode: CARD_SHOW_MODE
}

export interface IFlat {
  id: number
  name: string
  housingComplexName: string
  planLink: string
  photos: string[]
  squares: number
  sameLayoutFlatCount: number
  minPrice: number
}

export enum CARD_SHOW_MODE {
  ROW = "ROW",
  CARD = "CARD"
}

export enum SORT_MODE {
  CHEAP_START = "CHEAP_START",
  EXPENSIVE_START = "EXPENSIVE_START"
}

export enum FlatActionTypes {
  SET_COUNT_ROOM_FILTER = "SET_COUNT_ROOM_FILTER",
  SET_MIN_SQARE_FILTER = "SET_MIN_SQARE_FILTER",
  SET_MAX_SQARE_FILTER = "SET_MAX_SQARE_FILTER",
  SET_MIN_PRICE_FILTER = "SET_MIN_PRICE_FILTER",
  SET_MAX_PRICE_FILTER = "SET_MAX_PRICE_FILTER",
  REMOVE_FILTERS = "REMOVE_FILTERS",
  CLEAR_FILTER = "CLEAR_FILTER",
  SET_CARD_SHOW_MODE = "SET_CARD_SHOW_MODE",
  SORT_FLATS = "SORT_FLATS",
  SORT_FILTERED_FLATS = "SORT_FILTERED_FLATS",
  SET_FILTERED_FLATS = "SET_FILTERED_FLATS"
}

type SetCountRoomFilterAction = {
  type: FlatActionTypes.SET_COUNT_ROOM_FILTER
  payload: { countRoom: string }
}

type SetMinSquareFilterAction = {
  type: FlatActionTypes.SET_MIN_SQARE_FILTER
  payload: { minSquare: number }
}

type SetMaxSquareFilterAction = {
  type: FlatActionTypes.SET_MAX_SQARE_FILTER
  payload: { maxSquare: number }
}

type SetMinPriceFilterAction = {
  type: FlatActionTypes.SET_MIN_PRICE_FILTER
  payload: { minPrice: number }
}

type SetMaxPriceFilterAction = {
  type: FlatActionTypes.SET_MAX_PRICE_FILTER
  payload: { maxPrice: number }
}

type RemoveFiltersAction = {
  type: FlatActionTypes.REMOVE_FILTERS
}

type ClearFilterAction = {
  type: FlatActionTypes.CLEAR_FILTER
}

type setCardShowModeAction = {
  type: FlatActionTypes.SET_CARD_SHOW_MODE
  payload: { cardShowMode: CARD_SHOW_MODE }
}

type sortFlatsAction = {
  type: FlatActionTypes.SORT_FLATS
  payload: { sortFlats: IFlat[] }
}

type sortFilteredFlatsAction = {
  type: FlatActionTypes.SORT_FILTERED_FLATS
  payload: { sortFlats: IFlat[] }
}

type setFilteredFlatsAction = {
  type: FlatActionTypes.SET_FILTERED_FLATS
  payload: { filteredFlats: IFlat[] | null }
}

export type FlatAction =
  | SetCountRoomFilterAction
  | SetMinSquareFilterAction
  | SetMaxSquareFilterAction
  | SetMinPriceFilterAction
  | SetMaxPriceFilterAction
  | RemoveFiltersAction
  | ClearFilterAction
  | setCardShowModeAction
  | sortFlatsAction
  | sortFilteredFlatsAction
  | setFilteredFlatsAction
