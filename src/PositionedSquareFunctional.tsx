import React, { useEffect, useState } from "react"
import { Animated } from "react-native"
import { fieldSize } from "./constants"
import { Square } from "./Square"

interface Props {
  destination: { x: number; y: number }
}

export const PositionedSquareFunctional = (props: Props) => {
  const [animating, setAnimating] = useState(false)

  const [animatedPosition] = useState(new Animated.ValueXY(props.destination))

  animatedPosition.addListener(currentValue => {
    const destinationCoordinates = props.destination
    if (
      currentValue.x === destinationCoordinates.x &&
      currentValue.y === destinationCoordinates.y
    ) {
      setAnimating(false)
    }
  })

  useEffect(() => {
    setAnimating(true)
    Animated.timing(animatedPosition, {
      duration: 1000,
      toValue: props.destination
    }).start()
  }, [animatedPosition, props.destination])

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
