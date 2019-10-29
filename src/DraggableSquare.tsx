import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { Coordinates } from "./Coordinates"
import { Square } from "./Square"
import { SquareState } from "./SquareState"

enum VisualState {
  idleOrMoving,
  dragging,
  snapping
}

interface Props {
  moving: boolean
}

interface State {
  animatedPosition: Animated.ValueXY
  previousPosition: Coordinates
  visualState: VisualState
}

export class DraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY(),
      previousPosition: new Coordinates(0, 0),
      visualState: VisualState.idleOrMoving
    }

    this.state.animatedPosition.setOffset(this.state.previousPosition)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (_e, _gestureState) => true,
      onPanResponderGrant: (_e, _gestureState) => {
        this.setState({
          visualState: VisualState.dragging
        })
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
          visualState: VisualState.snapping
        })

        Animated.spring(this.state.animatedPosition, {
          // TODO: Support dragging to another position.
          toValue: { x: 0, y: 0 }
        }).start(() => {
          this.setState({
            visualState: VisualState.idleOrMoving
          })
        })

        this.setState({
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
    if (this.state.visualState === VisualState.dragging) {
      return SquareState.dragging
    }

    if (this.state.visualState === VisualState.snapping) {
      return SquareState.snapping
    }

    if (this.props.moving) {
      return SquareState.moving
    }

    return SquareState.idle
  }
}
