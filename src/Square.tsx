import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"
import { SquareState } from "./SquareState"

interface Props {
  squareState: SquareState
}

const getColor = (squareState: SquareState): string => {
  switch (squareState) {
    case SquareState.idle:
      return "black"
    case SquareState.animatingMove:
      return "red"
    case SquareState.dragging:
      return "green"
  }
}

export const Square = (props: Props) => (
  <View
    style={{
      backgroundColor: getColor(props.squareState),
      borderRadius: 5,
      height: squareSize,
      width: squareSize
    }}
  />
)
