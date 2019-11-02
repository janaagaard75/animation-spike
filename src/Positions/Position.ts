export abstract class Position {
  constructor(public x: number, public y: number) {}

  public equals(otherCoordinates: { x: number; y: number } | undefined) {
    if (otherCoordinates === undefined) {
      return false
    }

    return this.x === otherCoordinates.x && this.y === otherCoordinates.y
  }
}
