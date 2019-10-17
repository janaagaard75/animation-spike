import React, { Component } from "react"
import { Animated } from "react-native"
import { fieldSize, squareSize } from "./constants"
import { Position } from "./Position"
import { Square } from "./Square"

const toCoordinates = (position: Position): { x: number; y: number } => {
  switch (position) {
    case Position.BottomLeft:
      return {
        x: 0,
        y: fieldSize - squareSize
      }

    case Position.BottomRight:
      return {
        x: fieldSize - squareSize,
        y: fieldSize - squareSize
      }

    case Position.TopLeft:
      return {
        x: 0,
        y: 0
      }

    case Position.TopRight:
      return {
        x: fieldSize - squareSize,
        y: 0
      }
  }
}

interface Props {
  destination: Position
}

interface State {
  animatedPosition: Animated.ValueXY
  animating: boolean
}

export class PositionedSquareClass extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY(toCoordinates(props.destination)),
      animating: false
    }
  }

  public componentDidUpdate(prevProps: Props, _prevState: State) {
    if (prevProps.destination === this.props.destination) {
      return
    }

    this.setState({
      animating: true
    })
    Animated.timing(this.state.animatedPosition, {
      duration: 1000,
      toValue: toCoordinates(this.props.destination)
    }).start(() => {
      this.setState({
        animating: false
      })
    })
  }

  public render() {
    return (
      <Animated.View
        style={[
          {
            height: fieldSize,
            transform: this.state.animatedPosition.getTranslateTransform(),
            width: fieldSize
          }
        ]}
      >
        <Square animating={this.state.animating} />
      </Animated.View>
    )
  }
}
