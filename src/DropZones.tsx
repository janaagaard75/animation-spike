import React from "react"
import { View } from "react-native"
import { fieldSize } from "./constants"
import { DropZone } from "./DropZone"
import { allPositions } from "./Positions/allPositions"
import { Position } from "./Positions/Position"

export const DropZones = (props: { hoveredPosition: Position | undefined }) => {
  return (
    <View style={{ height: fieldSize, position: "absolute", width: fieldSize }}>
      {allPositions.map((position, index) => (
        <DropZone
          hovered={position.equals(props.hoveredPosition)}
          position={position}
          key={index}
        />
      ))}
    </View>
  )
}
