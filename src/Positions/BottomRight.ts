import { fieldSize, squareSize } from "../constants"
import { Position } from "./Position"

export class BottomRight extends Position {
  constructor() {
    super(fieldSize - squareSize, fieldSize - squareSize)
  }
}
