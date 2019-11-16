import { Constants } from "./Constants"
import { Coordinates } from "./Coordinates"

export class TileInfo implements Coordinates {
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

  public static readonly allTiles: Array<TileInfo> = [
    new TileInfo(0, 0),
    new TileInfo(Constants.fieldSize - Constants.squareSize, 0),
    new TileInfo(0, Constants.fieldSize - Constants.squareSize),
    new TileInfo(
      Constants.fieldSize - Constants.squareSize,
      Constants.fieldSize - Constants.squareSize
    )
  ]
}
