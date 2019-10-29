import { fieldSize, squareSize } from "../constants"
import { Coordinates } from "../Coordinates"
import { Position } from "./Position"

export class BottomLeft extends Position {
  constructor() {
    super(new Coordinates(0, fieldSize - squareSize))
  }
}
