import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"
import { Position } from "./Positions/Position"

export const DropZone = (props: { hovered: boolean; position: Position }) => (
  <View
    style={{
      borderColor: "red",
      borderRadius: 5,
      borderStyle: props.hovered ? "solid" : "dashed",
      borderWidth: 2,
      height: squareSize,
      left: props.position.x,
      position: "absolute",
      top: props.position.y,
      width: squareSize
    }}
  />
)
