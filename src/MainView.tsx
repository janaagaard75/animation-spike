import React, { useState } from "react"
import { Button, View } from "react-native"
import { DraggableSquare } from "./DraggableSquare"
import { DropZones } from "./DropZones"
import { Field } from "./Field"
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
  const [hoveredPosition, setHoveredPosition] = useState<Position | undefined>(
    undefined
  )

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
        <DropZones hoveredPosition={hoveredPosition} />
        <DraggableSquare
          destination={squarePosition}
          squareMoved={position =>
            setHoveredPosition(
              allPositions.find(namedPosition =>
                namedPosition.isHoveringAbove(position)
              )
            )
          }
        />
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
