import React from "react"
import { View } from "react-native"
import { PositionedSquareCoordinates } from "./PositionedSquareCoordinates"
import { Position } from "./Positions/Position"

interface Props {
  destination: Position
}

export const PositionedSquarePosition = (props: Props) => {
  return (
    <View style={{ position: "absolute" }}>
      <PositionedSquareCoordinates
        destination={props.destination.coordinates}
      ></PositionedSquareCoordinates>
    </View>
  )
}
