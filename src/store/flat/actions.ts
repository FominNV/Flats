import { CARD_SHOW_MODE, FlatAction, FlatActionTypes, IFlat, SORT_MODE } from "./types"

export const setCountRoomFilter = (countRoom: string): FlatAction => {
  return {
    type: FlatActionTypes.SET_COUNT_ROOM_FILTER,
    payload: { countRoom }
  }
}

export const setMinSquareFilter = (minSquare: number): FlatAction => {
  return {
    type: FlatActionTypes.SET_MIN_SQARE_FILTER,
    payload: { minSquare }
  }
}

export const setMaxSquareFilter = (maxSquare: number): FlatAction => {
  return {
    type: FlatActionTypes.SET_MAX_SQARE_FILTER,
    payload: { maxSquare }
  }
}

export const setMinPriceFilter = (minPrice: number): FlatAction => {
  return {
    type: FlatActionTypes.SET_MIN_PRICE_FILTER,
    payload: { minPrice }
  }
}

export const setMaxPriceFilter = (maxPrice: number): FlatAction => {
  return {
    type: FlatActionTypes.SET_MAX_PRICE_FILTER,
    payload: { maxPrice }
  }
}

export const removeFilters = (): FlatAction => {
  return {
    type: FlatActionTypes.REMOVE_FILTERS
  }
}

export const clearFilter = (): FlatAction => {
  return {
    type: FlatActionTypes.CLEAR_FILTER
  }
}

export const setCardShowMode = (mode: CARD_SHOW_MODE): FlatAction => {
  return {
    type: FlatActionTypes.SET_CARD_SHOW_MODE,
    payload: { cardShowMode: mode }
  }
}

export const sortFlats = (flats: IFlat[], mode: SORT_MODE = SORT_MODE.CHEAP_START): FlatAction => {
  if (mode === SORT_MODE.CHEAP_START) {
    flats.sort((a, b) => a.minPrice - b.minPrice)
  } else if (mode === SORT_MODE.EXPENSIVE_START) {
    flats.sort((a, b) => b.minPrice - a.minPrice)
  }

  return {
    type: FlatActionTypes.SORT_FLATS,
    payload: { sortFlats: flats }
  }
}

export const sortFilteredFlats = (
  flats: IFlat[],
  mode: SORT_MODE = SORT_MODE.CHEAP_START
): FlatAction => {
  if (mode === SORT_MODE.CHEAP_START) {
    flats.sort((a, b) => a.minPrice - b.minPrice)
  } else if (mode === SORT_MODE.EXPENSIVE_START) {
    flats.sort((a, b) => b.minPrice - a.minPrice)
  }

  return {
    type: FlatActionTypes.SORT_FILTERED_FLATS,
    payload: { sortFlats: flats }
  }
}

export const setFilteredFlats = (flats: IFlat[] | null): FlatAction => {
  return {
    type: FlatActionTypes.SET_FILTERED_FLATS,
    payload: { filteredFlats: flats }
  }
}
