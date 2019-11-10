import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { Coordinates } from "./Coordinates"
import { Position } from "./Position"
import { Square } from "./Square"
import { SquareState } from "./SquareState"

interface Props {
  destination: Position
  dropped: (dropPosition: Position) => void
  hoveredPosition: Position | undefined
  squareMoved: (position: Coordinates) => void
}

interface State {
  visualState: SquareState
}

export class DraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      visualState: SquareState.idle
    }

    this.animatedPosition = new Animated.ValueXY(props.destination)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (_e, _gestureState) => true,
      onPanResponderGrant: (_e, _gestureState) => {
        this.setState({
          visualState: SquareState.dragging
        })
      },
      onPanResponderMove: (_e, gestureState) => {
        this.animatedPosition.setValue({
          x: this.props.destination.x + gestureState.dx,
          y: this.props.destination.y + gestureState.dy
        })
        const visualStateAfterMove =
          this.props.hoveredPosition === undefined
            ? SquareState.dragging
            : SquareState.droppable
        if (visualStateAfterMove !== this.state.visualState) {
          this.setState({
            visualState: visualStateAfterMove
          })
        }
      },
      onPanResponderEnd: (_e, _gestureState) => {
        if (this.props.hoveredPosition !== undefined) {
          this.props.dropped(this.props.hoveredPosition)
          return
        }

        this.setState({
          visualState: SquareState.snapping
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
            visualState: SquareState.idle
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
      visualState: SquareState.moving
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
          visualState: SquareState.idle
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
        <Square squareState={this.state.visualState}></Square>
      </Animated.View>
    )
  }
}
