import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { SquareState } from "./SquareState"

interface Props {
  squareState: SquareState
}

const getColor = (squareState: SquareState): string => {
  switch (squareState) {
    case SquareState.dragging:
      return "green"
    case SquareState.droppable:
      return "lime"
    case SquareState.idle:
      return "black"
    case SquareState.moving:
      return "red"
    case SquareState.snapping:
      return "pink"
  }
}

export const Square = (props: Props) => (
  <View
    style={{
      backgroundColor: getColor(props.squareState),
      borderRadius: 5,
      height: Constants.squareSize,
      width: Constants.squareSize
    }}
  />
)
