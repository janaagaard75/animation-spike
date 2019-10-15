import React, { useEffect, useState } from "react"
import { Animated } from "react-native"
import { fieldSize, squareSize } from "./constants"
import { Position } from "./Position"
import { Square } from "./Square"

const toCoordinates = (position: Position): { x: number; y: number } => {
  switch (position) {
    case Position.BottomLeft:
      return {
        x: 0,
        y: fieldSize - squareSize
      }

    case Position.BottomRight:
      return {
        x: fieldSize - squareSize,
        y: fieldSize - squareSize
      }

    case Position.TopLeft:
      return {
        x: 0,
        y: 0
      }

    case Position.TopRight:
      return {
        x: fieldSize - squareSize,
        y: 0
      }
  }
}

interface Props {
  destination: Position
}

export const PositionedSquare = (props: Props) => {
  const [animating, setAnimating] = useState(false)

  const [animatedPosition] = useState(
    new Animated.ValueXY(toCoordinates(props.destination))
  )

  useEffect(() => {
    setAnimating(true)
    Animated.timing(animatedPosition, {
      duration: 1000,
      toValue: toCoordinates(props.destination)
    }).start(() => {
      setAnimating(false)
    })
  }, [props.destination, animatedPosition])

  return (
    <Animated.View
      style={[
        {
          height: fieldSize,
          transform: animatedPosition.getTranslateTransform(),
          width: fieldSize
        }
      ]}
    >
      <Square animating={animating} />
    </Animated.View>
  )
}
