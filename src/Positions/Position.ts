import { squareSize } from "../constants"
import { Coordinates } from "./Coordinates"

export abstract class Position implements Coordinates {
  constructor(public x: number, public y: number) {}

  public isHovered(position: Coordinates) {
    return (
      this.x <= position.x + squareSize &&
      position.x <= this.x + squareSize &&
      this.y <= position.y + squareSize &&
      position.y <= this.y + squareSize
    )
  }

  public equals(otherCoordinates: Coordinates | undefined) {
    if (otherCoordinates === undefined) {
      return false
    }

    return this.x === otherCoordinates.x && this.y === otherCoordinates.y
  }
}
