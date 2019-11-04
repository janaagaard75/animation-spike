import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"
import { MoveState } from "./MoveState"

interface Props {
  squareState: MoveState
}

const getColor = (squareState: MoveState): string => {
  switch (squareState) {
    case MoveState.dragging:
      return "green"
    case MoveState.idle:
      return "black"
    case MoveState.moving:
      return "red"
    case MoveState.snapping:
      return "lime"
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
