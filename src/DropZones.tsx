import React from "react"
import { View } from "react-native"
import { Constants } from "./Constants"
import { DropZone } from "./DropZone"
import { allPositions } from "./Positions/allPositions"
import { Position } from "./Positions/Position"

export const DropZones = (props: { hoveredPosition: Position | undefined }) => {
  return (
    <View
      style={{
        height: Constants.fieldSize,
        position: "absolute",
        width: Constants.fieldSize
      }}
    >
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
