import { fieldSize, squareSize } from "../constants"
import { Position } from "./Position"

export class BottomLeft extends Position {
  constructor() {
    super(0, fieldSize - squareSize)
  }
}
