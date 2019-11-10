import { Constants } from "../constants1"
import { Coordinates } from "./Coordinates"

export class Position implements Coordinates {
  constructor(public x: number, public y: number) {}

  public isHoveringAbove(position: Coordinates) {
    return (
      position.x >= this.x - Constants.squareSize &&
      position.x <= this.x + Constants.squareSize &&
      position.y >= this.y - Constants.squareSize &&
      position.y <= this.y + Constants.squareSize
    )
  }

  public equals(otherCoordinates: Coordinates | undefined) {
    if (otherCoordinates === undefined) {
      return false
    }

    return this.x === otherCoordinates.x && this.y === otherCoordinates.y
  }
}
