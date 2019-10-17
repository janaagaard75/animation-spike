import React from "react"
import { fieldSize, squareSize } from "./constants"
import { Coordinates } from "./Coordinates"
import { Position } from "./Position"
import { PositionedSquareClass } from "./PositionedSquareClass"
import { PositionedSquareFunctional } from "./PositionedSquareFunctional"

const toCoordinates = (position: Position): Coordinates => {
  switch (position) {
    case Position.BottomLeft:
      return new Coordinates(0, fieldSize - squareSize)

    case Position.BottomRight:
      return new Coordinates(fieldSize - squareSize, fieldSize - squareSize)

    case Position.TopLeft:
      return new Coordinates(0, 0)

    case Position.TopRight:
      return new Coordinates(fieldSize - squareSize, 0)
  }
}

interface Props {
  destination: Position
}

export const PositionedSquare = (props: Props) => {
  const destinationCoordinates = toCoordinates(props.destination)
  return (
    <>
      <PositionedSquareClass
        destination={destinationCoordinates}
      ></PositionedSquareClass>
      <PositionedSquareFunctional
        destination={destinationCoordinates}
      ></PositionedSquareFunctional>
    </>
  )
}
