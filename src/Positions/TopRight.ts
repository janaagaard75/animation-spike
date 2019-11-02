import { fieldSize, squareSize } from "../constants"
import { Position } from "./Position"

export class TopRight extends Position {
  constructor() {
    super(fieldSize - squareSize, 0)
  }
}
