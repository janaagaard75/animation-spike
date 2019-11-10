import React, { useState } from "react"
import { Button, View } from "react-native"
import { DraggableSquare } from "./DraggableSquare"
import { DropZones } from "./DropZones"
import { Field } from "./Field"
import { Position } from "./Positions/Position"

const getRandomInteger = (minimum: number, maximum: number): number => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

const getRandomPosition = (): Position => {
  return Position.allPositions[
    getRandomInteger(0, Position.allPositions.length - 1)
  ]
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
          dropped={dropPosition => setSquarePosition(dropPosition)}
          hoveredPosition={hoveredPosition}
          squareMoved={position =>
            setHoveredPosition(
              Position.allPositions
                .filter(pos => pos !== squarePosition)
                .find(pos => pos.isHoveringAbove(position))
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
