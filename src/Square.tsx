import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"
import { MoveState } from "./MoveState"

interface Props {
  droppable: boolean
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
      borderColor: "pink",
      borderStyle: props.droppable ? "solid" : "dashed",
      borderRadius: 5,
      borderWidth: 2,
      height: squareSize,
      width: squareSize
    }}
  />
)
