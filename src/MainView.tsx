import React, { Component } from "react"
import { Button, View } from "react-native"
import { Position } from "./Position"
import { PositionedSquare } from "./PositionedSquare"

interface State {
  squarePosition: Position
}

export class MainView extends Component<{}, State> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      squarePosition: Position.TopLeft
    }
  }

  public render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <PositionedSquare squarePosition={this.state.squarePosition} />
        <View
          style={{
            marginTop: 40
          }}
        >
          <Button onPress={() => this.moveSquare()} title="Move square" />
        </View>
      </View>
    )
  }

  private moveSquare() {
    this.setState({
      squarePosition: MainView.getNewRandomPosition(this.state.squarePosition)
    })
  }

  private static getNewRandomPosition(currentPosition: Position): Position {
    for (;;) {
      const newPosition = this.getRandomPosition()
      if (newPosition !== currentPosition) {
        return newPosition
      }
    }
  }

  private static getRandomPosition(): Position {
    return MainView.getRandomInteger(0, 3)
  }

  private static getRandomInteger(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
  }
}
