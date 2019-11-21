import React, { useState } from "react"
import { Button, View } from "react-native"
import { Constants } from "./Constants"
import { DraggableSquares } from "./DraggableSquares"
import { Field } from "./Field"
import { TileInfo } from "./TileInfo"
import { Tiles } from "./Tiles"

const getRandomInteger = (minimum: number, maximum: number): number => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

const getRandomTile = (): TileInfo => {
  return TileInfo.allTiles[getRandomInteger(0, TileInfo.allTiles.length - 1)]
}

const getRandomTiles = (numberOfTiles: number): Array<TileInfo> => {
  return [...Array(numberOfTiles).keys()].map(() => getRandomTile())
}

export const MainView = () => {
  const [currentTiles, setCurrentTiles] = useState(
    getRandomTiles(Constants.numberOfSquares)
  )
  // const [hoveredTile, setHoveredTile] = useState<TileInfo | undefined>(
  //   undefined
  // )

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
        <Tiles hoveredTile={undefined} />
        {/* <DraggableSquare
          destination={currentTile}
          droppedOnTile={tile => setCurrentTile(tile)}
          hoveredTile={hoveredTile}
          squareMoved={topLeftCoordinates =>
            setHoveredTile(
              TileInfo.allTiles
                .filter(tile => tile !== currentTile)
                .find(tile => tile.isHoveringAbove(topLeftCoordinates))
            )
          }
        /> */}
        <DraggableSquares
          currentTiles={currentTiles}
          droppedOnTile={_tile => {}}
          squareMoved={_topLeftCoordinates => {}}
        />
      </Field>
      <View
        style={{
          marginTop: 10
        }}
      >
        <Button
          onPress={() =>
            setCurrentTiles(getRandomTiles(Constants.numberOfSquares))
          }
          title="Move squares"
        />
      </View>
    </View>
  )
}
