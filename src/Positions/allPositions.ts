import { fieldSize, squareSize } from "../constants"
import { Position } from "./Position"

export const allPositions: Array<Position> = [
  new Position(0, 0),
  new Position(fieldSize - squareSize, 0),
  new Position(0, fieldSize - squareSize),
  new Position(fieldSize - squareSize, fieldSize - squareSize)
]
