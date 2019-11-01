import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { Coordinates } from "./Coordinates"
import { Position } from "./Positions/Position"
import { Square } from "./Square"
import { SquareState } from "./SquareState"

interface Props {
  destination: Position
}

interface State {
  // TODO: Consider moving animatedPosition from state to a class property.
  animatedPosition: Animated.ValueXY
  previousPosition: Coordinates
  visualState: SquareState
}

export class PositionedDraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY(props.destination.coordinates),
      previousPosition: props.destination.coordinates,
      visualState: SquareState.idle
    }

    // this.state.animatedPosition.setOffset(props.destination.coordinates)

    this.state.animatedPosition.addListener(currentValue => {
      if (this.props.destination.coordinates.equals(currentValue)) {
        this.setState({ visualState: SquareState.idle })
      }
    })

    // TODO: Support dragging from another position than 0,0.
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (_e, _gestureState) => true,
      onPanResponderGrant: (_e, _gestureState) => {
        this.setState({
          visualState: SquareState.dragging
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
          visualState: SquareState.snapping
        })

        Animated.spring(this.state.animatedPosition, {
          bounciness: 3,
          restDisplacementThreshold: 2,
          restSpeedThreshold: 2,
          // TODO: Support dragging to another position.
          toValue: { x: 0, y: 0 },
          useNativeDriver: true
        }).start(() => {
          this.setState({
            visualState: SquareState.idle
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
    }).start()
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
