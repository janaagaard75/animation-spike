import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { Position } from "./Position"

export const DropZone = (props: { hovered: boolean; position: Position }) => (
  <View
    style={{
      borderColor: "red",
      borderRadius: 5,
      borderStyle: props.hovered ? "solid" : "dashed",
      borderWidth: 2,
      height: Constants.squareSize,
      left: props.position.x,
      position: "absolute",
      top: props.position.y,
      width: Constants.squareSize
    }}
  />
)
