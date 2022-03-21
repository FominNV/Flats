export interface IRangeProps {
  min: number
  max: number
  step: number
  mode?: string
  setMin?: (value: number) => void
  setMax?: (value: number) => void
}
