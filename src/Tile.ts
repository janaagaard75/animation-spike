import { Constants } from "./Constants"
import { Coordinates } from "./Coordinates"

export class Tile implements Coordinates {
  constructor(public x: number, public y: number) {}

  public isHoveringAbove(topLeftOfTile: Coordinates) {
    return (
      topLeftOfTile.x >= this.x - Constants.squareSize &&
      topLeftOfTile.x <= this.x + Constants.squareSize &&
      topLeftOfTile.y >= this.y - Constants.squareSize &&
      topLeftOfTile.y <= this.y + Constants.squareSize
    )
  }

  public equals(otherCoordinates: Coordinates | undefined) {
    if (otherCoordinates === undefined) {
      return false
    }

    return this.x === otherCoordinates.x && this.y === otherCoordinates.y
  }

  public static readonly allTiles: Array<Tile> = [
    new Tile(0, 0),
    new Tile(Constants.fieldSize - Constants.squareSize, 0),
    new Tile(0, Constants.fieldSize - Constants.squareSize),
    new Tile(
      Constants.fieldSize - Constants.squareSize,
      Constants.fieldSize - Constants.squareSize
    )
  ]
}
