const useNumberFormat = (value: number, format = "price"): string => {
  if (format === "price") {
    return String(value)
      .split("")
      .reverse()
      .join("")
      .match(/\d{0,3}/g)
      .join(" ")
      .split("")
      .reverse()
      .join("")
      .trim()
  } else if (format === "square") {
    return new Intl.NumberFormat("ru-RU").format(value)
  } else if (format === "million") {
    return new Intl.NumberFormat("en-US").format(value / 1000000)
  }
}

export default useNumberFormat
