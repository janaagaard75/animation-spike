import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import { Position } from "./Position"
import { PositionedSquare } from "./PositionedSquare"

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

const getPositionName = (position: Position) => {
  switch (position) {
    case Position.BottomLeft:
      return "Bottom left"
    case Position.BottomRight:
      return "Bottom right"
    case Position.TopLeft:
      return "Top left"
    case Position.TopRight:
      return "Top right"
  }
}

export const MainView = () => {
  const [squarePosition, setSquarePosition] = useState(Position.TopLeft)

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center"
      }}
    >
      <PositionedSquare destination={squarePosition} />
      <Text
        style={{
          marginTop: 20
        }}
      >
        Destination: {getPositionName(squarePosition)}
      </Text>
      <View
        style={{
          marginTop: 20
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
