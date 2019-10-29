import React, { useState } from "react"
import { Button, View } from "react-native"
import { DropZones } from "./DropZones"
import { Field } from "./Field"
import { PositionedSquare } from "./PositionedSquare"
import { allPositions } from "./Positions/allPositions"
import { Position } from "./Positions/Position"

const getRandomInteger = (minimum: number, maximum: number): number => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

const getRandomPosition = (): Position => {
  return allPositions[getRandomInteger(0, allPositions.length - 1)]
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
      <Field>
        <DropZones hoveredPosition={undefined} />
        <PositionedSquare destination={squarePosition} />
      </Field>
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
