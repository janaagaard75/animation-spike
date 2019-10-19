import React, { Component } from "react"
import { Animated, PanResponder, PanResponderInstance } from "react-native"
import { Square } from "./Square"

interface Props {
  animating: boolean
}

interface State {
  animatedPosition: Animated.ValueXY
}

export class DraggableSquare extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY()
    }

    // TODO: Fix dragging again.
    this.panResponder = PanResponder.create({
      onPanResponderMove: (e, gestureState) => {
        Animated.event([
          null,
          {
            dx: this.state.animatedPosition.x,
            dy: this.state.animatedPosition.y
          }
        ])(e, gestureState)
      },
      onStartShouldSetPanResponder: (_e, _gestureState) => true
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
        <Square animating={this.props.animating}></Square>
      </Animated.View>
    )
  }
}
