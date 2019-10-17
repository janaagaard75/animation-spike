import React from "react"
import { fieldSize, squareSize } from "./constants"
import { Position } from "./Position"
import { PositionedSquareClass } from "./PositionedSquareClass"
import { PositionedSquareFunctional } from "./PositionedSquareFunctional"

const toCoordinates = (position: Position): { x: number; y: number } => {
  switch (position) {
    case Position.BottomLeft:
      return {
        x: 0,
        y: fieldSize - squareSize
      }

    case Position.BottomRight:
      return {
        x: fieldSize - squareSize,
        y: fieldSize - squareSize
      }

    case Position.TopLeft:
      return {
        x: 0,
        y: 0
      }

    case Position.TopRight:
      return {
        x: fieldSize - squareSize,
        y: 0
      }
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
