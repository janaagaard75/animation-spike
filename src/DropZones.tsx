import React from "react"
import { View } from "react-native"
import { fieldSize, squareSize } from "./constants"
import { Coordinates } from "./Coordinates"
import { DropZone } from "./DropZone"

export const DropZones = () => {
  const zones: Array<Coordinates> = [
    new Coordinates(0, 0),
    new Coordinates(0, fieldSize - squareSize),
    new Coordinates(fieldSize - squareSize, 0),
    new Coordinates(fieldSize - squareSize, fieldSize - squareSize)
  ]

  return (
    <View style={{ height: fieldSize, position: "absolute", width: fieldSize }}>
      {zones.map((zone, index) => (
        <DropZone position={zone} key={index} />
      ))}
    </View>
  )
}
