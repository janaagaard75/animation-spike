import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"

interface Props {
  animating: boolean
}

export const Square = (props: Props) => (
  <View
    style={{
      backgroundColor: props.animating ? "red" : "blue",
      borderRadius: 5,
      height: squareSize,
      width: squareSize
    }}
  ></View>
)
