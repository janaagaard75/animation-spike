import React, { Component } from "react"
import { View, ViewStyle } from "react-native"
import { Square } from "./Square"

enum Position {
  BottomLeft,
  BottomRight,
  TopLeft,
  TopRight
}

interface State {
  squarePosition: Position
}

export class PositionedSquare extends Component<{}, State> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      squarePosition: Position.BottomRight
    }
  }

  public render() {
    return (
      <View
        style={[
          {
            display: "flex",
            height: 300,
            width: 300
          },
          PositionedSquare.getPositionStyle(this.state.squarePosition)
        ]}
      >
        <Square />
      </View>
    )
  }

  private static getPositionStyle(position: Position): ViewStyle {
    switch (position) {
      case Position.BottomLeft:
        return {
          alignItems: "flex-end",
          justifyContent: "flex-start"
        }

      case Position.BottomRight:
        return {
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }

      case Position.TopLeft:
        return {
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }

      case Position.TopRight:
        return {
          alignItems: "flex-start",
          justifyContent: "flex-end"
        }
    }
  }
}
