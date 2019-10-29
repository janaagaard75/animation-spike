import { Coordinates } from "../Coordinates"
import { Position } from "./Position"

export class TopLeft extends Position {
  constructor() {
    super(new Coordinates(0, 0))
  }
}
