import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { Position } from "./Positions/Position"
import { Square } from "./Square"
import { SquareState } from "./SquareState"

interface Props {
  destination: Position
}

interface State {
  animatedPosition: Animated.ValueXY
  visualState: SquareState
}

export class PositionedDraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY(props.destination.coordinates),
      visualState: SquareState.idle
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (_e, _gestureState) => true,
      onPanResponderGrant: (_e, _gestureState) => {
        this.setState({
          visualState: SquareState.dragging
        })
      },
      onPanResponderMove: (_e, gestureState) => {
        this.state.animatedPosition.setValue({
          x: this.props.destination.coordinates.x + gestureState.dx,
          y: this.props.destination.coordinates.y + gestureState.dy
        })
      },
      onPanResponderEnd: (_e, _gestureState) => {
        this.setState({
          visualState: SquareState.snapping
        })

        Animated.spring(this.state.animatedPosition, {
          bounciness: 3,
          restDisplacementThreshold: 2,
          restSpeedThreshold: 2,
          // TODO: Support dragging to another position.
          toValue: {
            x: this.props.destination.coordinates.x,
            y: this.props.destination.coordinates.y
          },
          useNativeDriver: true
        }).start(() => {
          this.setState({
            visualState: SquareState.idle
          })
        })
      }
    })
  }

  private panResponder: PanResponderInstance

  public componentDidUpdate(prevProps: Props, _prevState: State) {
    if (prevProps.destination === this.props.destination) {
      return
    }

    this.setState({
      visualState: SquareState.moving
    })

    Animated.spring(this.state.animatedPosition, {
      bounciness: 3,
      restDisplacementThreshold: 2,
      restSpeedThreshold: 2,
      toValue: this.props.destination.coordinates,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        visualState: SquareState.idle
      })
    })
  }

  public render() {
    return (
      <Animated.View
        style={{
          transform: this.state.animatedPosition.getTranslateTransform()
        }}
        {...this.panResponder.panHandlers}
      >
        <Square squareState={this.state.visualState}></Square>
      </Animated.View>
    )
  }
}
