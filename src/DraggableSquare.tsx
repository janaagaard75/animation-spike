import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { MoveState } from "./MoveState"
import { Coordinates } from "./Positions/Coordinates"
import { Position } from "./Positions/Position"
import { Square } from "./Square"

interface Props {
  destination: Position
  droppable: boolean
  squareMoved: (position: Coordinates) => any
}

interface State {
  visualState: MoveState
}

export class DraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      visualState: MoveState.idle
    }

    this.animatedPosition = new Animated.ValueXY(props.destination)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (_e, _gestureState) => true,
      onPanResponderGrant: (_e, _gestureState) => {
        this.setState({
          visualState: MoveState.dragging
        })
      },
      onPanResponderMove: (_e, gestureState) => {
        this.animatedPosition.setValue({
          x: this.props.destination.x + gestureState.dx,
          y: this.props.destination.y + gestureState.dy
        })
      },
      onPanResponderEnd: (_e, _gestureState) => {
        this.setState({
          visualState: MoveState.snapping
        })

        Animated.spring(this.animatedPosition, {
          bounciness: 3,
          restDisplacementThreshold: 2,
          restSpeedThreshold: 2,
          toValue: {
            x: this.props.destination.x,
            y: this.props.destination.y
          },
          useNativeDriver: true
        }).start(() => {
          this.setState({
            visualState: MoveState.idle
          })
        })
      }
    })

    this.queuedMoves = 0

    this.animatedPosition.addListener(position =>
      this.props.squareMoved(position)
    )
  }

  private animatedPosition: Animated.ValueXY
  private panResponder: PanResponderInstance
  private queuedMoves: number

  public componentDidUpdate(prevProps: Props, _prevState: State) {
    if (prevProps.destination === this.props.destination) {
      return
    }

    this.setState({
      visualState: MoveState.moving
    })
    this.queuedMoves++

    Animated.spring(this.animatedPosition, {
      bounciness: 3,
      restDisplacementThreshold: 2,
      restSpeedThreshold: 2,
      toValue: this.props.destination,
      useNativeDriver: true
    }).start(() => {
      this.queuedMoves--
      if (this.queuedMoves === 0) {
        this.setState({
          visualState: MoveState.idle
        })
      }
    })
  }

  public render() {
    return (
      <Animated.View
        style={{
          transform: this.animatedPosition.getTranslateTransform()
        }}
        {...this.panResponder.panHandlers}
      >
        <Square
          droppable={this.props.droppable}
          squareState={this.state.visualState}
        ></Square>
      </Animated.View>
    )
  }
}
