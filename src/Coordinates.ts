export class Coordinates {
  constructor(public x: number, public y: number) {}

  public equals(otherCoordinates: { x: number; y: number }) {
    return this.x === otherCoordinates.x && this.y === otherCoordinates.y
  }
}
