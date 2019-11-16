import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { Tile } from "./Tile"
import { TileInfo } from "./TileInfo"

export const Tiles = (props: { hoveredTile: TileInfo | undefined }) => {
  return (
    <View
      style={{
        height: Constants.fieldSize,
        position: "absolute",
        width: Constants.fieldSize
      }}
    >
      {TileInfo.allTiles.map((tile, index) => (
        <Tile
          hovered={tile.equals(props.hoveredTile)}
          tile={tile}
          key={index}
        />
      ))}
    </View>
  )
}
