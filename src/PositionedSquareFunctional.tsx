import React, { useEffect, useState } from "react"
import { Animated } from "react-native"
import { fieldSize } from "./constants"
import { Coordinates } from "./Coordinates"
import { Square } from "./Square"

interface Props {
  destination: Coordinates
}

export const PositionedSquareFunctional = (props: Props) => {
  const [animating, setAnimating] = useState(false)

  const [animatedPosition] = useState(new Animated.ValueXY(props.destination))

  animatedPosition.addListener(currentValue => {
    if (props.destination.equals(currentValue)) {
      setAnimating(false)
    }
  })

  useEffect(() => {
    setAnimating(true)
    Animated.spring(animatedPosition, {
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
