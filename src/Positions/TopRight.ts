import { fieldSize, squareSize } from "../constants"
import { Coordinates } from "../Coordinates"
import { Position } from "./Position"

export class TopRight extends Position {
  constructor() {
    super(new Coordinates(fieldSize - squareSize, 0))
  }
}
