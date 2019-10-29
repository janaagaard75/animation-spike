import { fieldSize, squareSize } from "../constants"
import { Coordinates } from "../Coordinates"
import { Position } from "./Position"

export class BottomRight extends Position {
  constructor() {
    super(new Coordinates(fieldSize - squareSize, fieldSize - squareSize))
  }
}
