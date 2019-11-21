import React from "react"
import { Coordinates } from "./Coordinates"
import { DraggableSquare } from "./DraggableSquare"
import { TileInfo } from "./TileInfo"

export const DraggableSquares = (props: {
  currentTiles: Array<TileInfo>
  droppedOnTile: (tile: TileInfo) => void
  squareMoved: (topLeftCoordinates: Coordinates) => void
}) => {
  return (
    <>
      {props.currentTiles.map((currentTile, index) => (
        <DraggableSquare
          destination={currentTile}
          droppedOnTile={props.droppedOnTile}
          hoveredTile={undefined}
          squareMoved={props.squareMoved}
          key={index}
        ></DraggableSquare>
      ))}
    </>
  )
}
