import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { Coordinates } from "./Coordinates"
import { Square } from "./Square"
import { SquareState } from "./SquareState"

interface Props {
  animating: boolean
}

interface State {
  animatedPosition: Animated.ValueXY
  dragging: boolean
  previousPosition: Coordinates
}

export class DraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY(),
      dragging: false,
      previousPosition: new Coordinates(0, 0)
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (_e, _gestureState) => true,
      onPanResponderGrant: (_e, _gestureState) => {
        this.setState({
          dragging: true
        })
        this.state.animatedPosition.setOffset(this.state.previousPosition)
      },
      onPanResponderMove: (e, gestureState) => {
        Animated.event([
          null,
          {
            dx: this.state.animatedPosition.x,
            dy: this.state.animatedPosition.y
          }
        ])(e, gestureState)
      },
      onPanResponderEnd: (_e, gestureState) => {
        this.setState({
          dragging: false,
          previousPosition: new Coordinates(
            this.state.previousPosition.x + gestureState.dx,
            this.state.previousPosition.y + gestureState.dy
          )
        })
      }
    })
  }

  private panResponder: PanResponderInstance

  public render() {
    return (
      <Animated.View
        style={{
          transform: this.state.animatedPosition.getTranslateTransform()
        }}
        {...this.panResponder.panHandlers}
      >
        <Square squareState={this.getSquareState()}></Square>
      </Animated.View>
    )
  }

  private getSquareState(): SquareState {
    if (this.props.animating) {
      return SquareState.animating
    }

    if (this.state.dragging) {
      return SquareState.dragging
    }

    return SquareState.idle
  }
}
