import React from "react"
import { View } from "react-native"
import { squareSize } from "./constants"

export const Square = () => (
  <View
    style={{
      backgroundColor: "red",
      borderRadius: 5,
      height: squareSize,
      width: squareSize
    }}
  ></View>
)
