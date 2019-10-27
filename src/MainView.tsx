import React, { useState } from "react"
import { Button, View } from "react-native"
import { Position } from "./Position"
import { PositionedSquarePosition } from "./PositionedSquarePosition"

const getRandomInteger = (minimum: number, maximum: number): number => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

const getRandomPosition = (): Position => {
  return getRandomInteger(0, 3)
}

const getNewRandomPosition = (currentPosition: Position): Position => {
  for (;;) {
    const newPosition = getRandomPosition()
    if (newPosition !== currentPosition) {
      return newPosition
    }
  }
}

export const MainView = () => {
  const [squarePosition, setSquarePosition] = useState(getRandomPosition())

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center"
      }}
    >
      <PositionedSquarePosition destination={squarePosition} />
      <View
        style={{
          marginTop: 10
        }}
      >
        <Button
          onPress={() =>
            setSquarePosition(getNewRandomPosition(squarePosition))
          }
          title="Move square"
        />
      </View>
    </View>
  )
}
