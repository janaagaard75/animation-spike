import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { TileInfo } from "./TileInfo"
import { TileView } from "./TileView"

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
        <TileView
          hovered={tile.equals(props.hoveredTile)}
          tile={tile}
          key={index}
        />
      ))}
    </View>
  )
}
