import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { DropZone } from "./DropZone"
import { Tile } from "./Tile"

export const DropZones = (props: { hoveredTile: Tile | undefined }) => {
  return (
    <View
      style={{
        height: Constants.fieldSize,
        position: "absolute",
        width: Constants.fieldSize
      }}
    >
      {Tile.allTiles.map((tile, index) => (
        <DropZone
          hovered={tile.equals(props.hoveredTile)}
          tile={tile}
          key={index}
        />
      ))}
    </View>
  )
}
