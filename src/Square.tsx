import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"
import { SquareState } from "./SquareState"

interface Props {
  droppable: boolean
  squareState: SquareState
}

const getColor = (squareState: SquareState): string => {
  switch (squareState) {
    case SquareState.dragging:
      return "green"
    case SquareState.idle:
      return "black"
    case SquareState.moving:
      return "red"
    case SquareState.snapping:
      return "lime"
  }
}

export const Square = (props: Props) => (
  <View
    style={{
      backgroundColor: getColor(props.squareState),
      borderColor: "pink",
      borderStyle: props.droppable ? "solid" : "dashed",
      borderRadius: 5,
      borderWidth: 2,
      height: squareSize,
      width: squareSize
    }}
  />
)
