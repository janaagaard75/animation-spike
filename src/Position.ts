import { Constants } from "./Constants"
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

  public static readonly allPositions: Array<Position> = [
    new Position(0, 0),
    new Position(Constants.fieldSize - Constants.squareSize, 0),
    new Position(0, Constants.fieldSize - Constants.squareSize),
    new Position(
      Constants.fieldSize - Constants.squareSize,
      Constants.fieldSize - Constants.squareSize
    )
  ]
}
