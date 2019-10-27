import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"
import { Coordinates } from "./Coordinates"

export const DropZone = (props: { position: Coordinates }) => (
  <View
    style={{
      borderColor: "red",
      borderRadius: 5,
      borderStyle: "dashed",
      borderWidth: 2,
      height: squareSize,
      left: props.position.y,
      position: "absolute",
      top: props.position.x,
      width: squareSize
    }}
  />
)
