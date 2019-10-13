import React, { Component } from "react"
import { View } from "react-native"
import { Square } from "./Square"

enum Position {
  BottomLeft,
  BottomRight,
  TopLeft,
  TopRight
}

interface State {
  SquarePosition: Position
}

export class PositionedSquare extends Component<{}, State> {
  public render() {
    return (
      <View
        style={{
          alignItems: "flex-end",
          display: "flex",
          height: 300,
          justifyContent: "flex-end",
          width: 300
        }}
      >
        <Square />
      </View>
    )
  }
}
