import React, { useEffect, useState } from "react"
import { Animated } from "react-native"
import { Position } from "./Position"
import { Square } from "./Square"

const getPositionXY = (position: Position): { x: number; y: number } => {
  switch (position) {
    case Position.BottomLeft:
      return {
        x: 0,
        y: 300 - 100
      }

    case Position.BottomRight:
      return {
        x: 300 - 100,
        y: 300 - 100
      }

    case Position.TopLeft:
      return {
        x: 0,
        y: 0
      }

    case Position.TopRight:
      return {
        x: 0,
        y: 0
      }
  }
}

interface Props {
  destination: Position
}

export const PositionedSquare = (props: Props) => {
  const [animatedPosition] = useState(
    new Animated.ValueXY(getPositionXY(props.destination))
  )

  useEffect(() => {
    Animated.timing(animatedPosition, {
      toValue: getPositionXY(props.destination),
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
        }
      ]}
    >
      <Square />
    </Animated.View>
  )
}
