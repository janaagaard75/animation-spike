import React, { useEffect, useState } from "react"
import { Animated, ViewStyle } from "react-native"
import { Position } from "./Position"
import { Square } from "./Square"

// TODO: Replace with absolution values, since this is how animations work.
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
  const [animatedPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }))

  useEffect(() => {
    Animated.timing(animatedPosition, {
      toValue: { x: 100, y: 100 },
      duration: 1000
    }).start()
  })

  return (
    <Animated.View
      style={[
        {
          display: "flex",
          height: 300,
          transform: animatedPosition.getTranslateTransform(),
          width: 300
        },
        getPositionStyle(props.destination)
      ]}
    >
      <Square />
    </Animated.View>
  )
}
