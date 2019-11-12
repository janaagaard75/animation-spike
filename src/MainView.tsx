import React, { useState } from "react"
import { Button, View } from "react-native"
import { DraggableSquare } from "./DraggableSquare"
import { DropZones } from "./DropZones"
import { Field } from "./Field"
import { Tile } from "./Tile"

const getRandomInteger = (minimum: number, maximum: number): number => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

const getRandomTile = (): Tile => {
  return Tile.allTiles[getRandomInteger(0, Tile.allTiles.length - 1)]
}

const getNewRandomTile = (currentTile: Tile): Tile => {
  for (;;) {
    const newTile = getRandomTile()
    if (newTile !== currentTile) {
      return newTile
    }
  }
}

export const MainView = () => {
  const [currentTile, setCurrentTile] = useState(getRandomTile())
  const [hoveredTile, setHoveredTile] = useState<Tile | undefined>(undefined)

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
        <DropZones hoveredTile={hoveredTile} />
        <DraggableSquare
          destination={currentTile}
          droppedOnTile={tile => setCurrentTile(tile)}
          hoveredTile={hoveredTile}
          squareMoved={topLeftCoordinates =>
            setHoveredTile(
              Tile.allTiles
                .filter(tile => tile !== currentTile)
                .find(tile => tile.isHoveringAbove(topLeftCoordinates))
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
          onPress={() => setCurrentTile(getNewRandomTile(currentTile))}
          title="Move square"
        />
      </View>
    </View>
  )
}
