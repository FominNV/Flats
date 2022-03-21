export interface IRangeBlockProps {
  title: string
  mode?: string
  min: number
  max: number
  step: number
  setMin?: (value: number) => void
  setMax?: (value: number) => void
}
