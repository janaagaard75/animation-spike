import { squareSize } from "../constants"
import { Coordinates } from "./Coordinates"

export abstract class Position implements Coordinates {
  constructor(public x: number, public y: number) {}

  public isHovered(position: Coordinates) {
    // TODO: Why does the x and y have to be reversed for this to be correct?!?
    return (
      this.y <= position.x + squareSize &&
      position.y <= this.x + squareSize &&
      this.x <= position.y + squareSize &&
      position.x <= this.y + squareSize
    )
  }

  public equals(otherCoordinates: Coordinates | undefined) {
    if (otherCoordinates === undefined) {
      return false
    }

    return this.x === otherCoordinates.x && this.y === otherCoordinates.y
  }
}
