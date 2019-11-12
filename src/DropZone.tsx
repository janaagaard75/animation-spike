import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { Tile } from "./Tile"

export const DropZone = (props: { hovered: boolean; tile: Tile }) => (
  <View
    style={{
      borderColor: "red",
      borderRadius: 5,
      borderStyle: props.hovered ? "solid" : "dashed",
      borderWidth: 2,
      height: Constants.squareSize,
      left: props.tile.x,
      position: "absolute",
      top: props.tile.y,
      width: Constants.squareSize
    }}
  />
)
