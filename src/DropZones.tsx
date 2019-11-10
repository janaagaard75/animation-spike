import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { DropZone } from "./DropZone"
import { Position } from "./Position"

export const DropZones = (props: { hoveredPosition: Position | undefined }) => {
  return (
    <View
      style={{
        height: Constants.fieldSize,
        position: "absolute",
        width: Constants.fieldSize
      }}
    >
      {Position.allPositions.map((position, index) => (
        <DropZone
          hovered={position.equals(props.hoveredPosition)}
          position={position}
          key={index}
        />
      ))}
    </View>
  )
}
