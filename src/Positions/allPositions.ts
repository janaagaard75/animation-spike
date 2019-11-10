import { Constants } from "../constants1"
import { Position } from "./Position"

export const allPositions: Array<Position> = [
  new Position(0, 0),
  new Position(Constants.fieldSize - Constants.squareSize, 0),
  new Position(0, Constants.fieldSize - Constants.squareSize),
  new Position(
    Constants.fieldSize - Constants.squareSize,
    Constants.fieldSize - Constants.squareSize
  )
]
