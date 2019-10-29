import { BottomLeft } from "./BottomLeft"
import { BottomRight } from "./BottomRight"
import { Position } from "./Position"
import { TopLeft } from "./TopLeft"
import { TopRight } from "./TopRight"

export const allPositions: Array<Position> = [
  new TopLeft(),
  new TopRight(),
  new BottomLeft(),
  new BottomRight()
]
