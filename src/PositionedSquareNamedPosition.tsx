import React from "react"
import { View } from "react-native"
import { fieldSize, squareSize } from "./constants"
import { Coordinates } from "./Coordinates"
import { Position } from "./Position"
import { PositionedSquareCoordinates } from "./PositionedSquareCoordinates"

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

export const PositionedSquareNamedPosition = (props: Props) => {
  const destinationCoordinates = toCoordinates(props.destination)
  return (
    <View style={{ position: "absolute" }}>
      <PositionedSquareCoordinates
        destination={destinationCoordinates}
      ></PositionedSquareCoordinates>
    </View>
  )
}
