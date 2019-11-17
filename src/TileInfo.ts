import { Constants } from "./Constants"
import { Coordinates } from "./Coordinates"

export class TileInfo implements Coordinates {
  constructor(coordinates: Coordinates) {
    this.x = coordinates.x
    this.y = coordinates.y
  }

  public x: number
  public y: number

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
    ...Array(Constants.rows * Constants.columns).keys()
  ].map(
    i =>
      new TileInfo({
        x: ((i % Constants.columns) * Constants.fieldSize) / Constants.columns,
        y:
          (Math.floor(i / Constants.rows) * Constants.fieldSize) /
          Constants.rows
      })
  )
}
