import { Coordinates } from "../Coordinates"

// TODO: Set x and y directly on this class - Position and Coordinates are kinda the same thing.
export abstract class Position {
  public constructor(public coordinates: Coordinates) {}
}
