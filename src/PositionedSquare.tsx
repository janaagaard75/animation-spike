import React from "react"
import { View, ViewStyle } from "react-native"
import { Position } from "./Position"
import { Square } from "./Square"

const getPositionStyle = (position: Position): ViewStyle => {
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

interface Props {
  destination: Position
}

export const PositionedSquare = (props: Props) => {
  return (
    <View
      style={[
        {
          display: "flex",
          height: 300,
          width: 300
        },
        getPositionStyle(props.destination)
      ]}
    >
      <Square />
    </View>
  )
}
