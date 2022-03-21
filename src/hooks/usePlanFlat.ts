const usePlanFlat = (layout: string): string => {
  return layout === "C"
    ? "Студия"
    : layout === "1"
    ? "1 комната"
    : layout === "2"
    ? "2 комнаты"
    : layout === "3"
    ? "3 комнаты"
    : "4+ комнат"
}

export default usePlanFlat
