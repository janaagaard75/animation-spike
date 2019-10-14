import React, { Component } from "react"
import { View, ViewStyle } from "react-native"
import { Position } from "./Position"
import { Square } from "./Square"

interface Props {
  destination: Position
}

export class PositionedSquare extends Component<Props> {
  public render() {
    return (
      <View
        style={[
          {
            display: "flex",
            height: 300,
            width: 300
          },
          PositionedSquare.getPositionStyle(this.props.destination)
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
          alignItems: "flex-start",
          justifyContent: "flex-end"
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
          alignItems: "flex-end",
          justifyContent: "flex-start"
        }
    }
  }
}
