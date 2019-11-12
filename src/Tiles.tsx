import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { Tile } from "./Tile"
import { TileView } from "./TileView"

export const Tiles = (props: { hoveredTile: Tile | undefined }) => {
  return (
    <View
      style={{
        height: Constants.fieldSize,
        position: "absolute",
        width: Constants.fieldSize
      }}
    >
      {Tile.allTiles.map((tile, index) => (
        <TileView
          hovered={tile.equals(props.hoveredTile)}
          tile={tile}
          key={index}
        />
      ))}
    </View>
  )
}
