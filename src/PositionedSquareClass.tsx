import React, { Component } from "react"
import { Animated } from "react-native"
import { fieldSize } from "./constants"
import { Coordinates } from "./Coordinates"
import { DraggableSquare } from "./DraggableSquare"

interface Props {
  destination: Coordinates
}

interface State {
  animatedPosition: Animated.ValueXY
  animating: boolean
}

export class PositionedSquareClass extends Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      animatedPosition: new Animated.ValueXY(props.destination),
      animating: false
    }

    this.state.animatedPosition.addListener(currentValue => {
      if (this.props.destination.equals(currentValue)) {
        this.setState({ animating: false })
      }
    })
  }

  public componentDidUpdate(prevProps: Props, _prevState: State) {
    if (prevProps.destination === this.props.destination) {
      return
    }

    this.setState({
      animating: true
    })
    Animated.spring(this.state.animatedPosition, {
      toValue: this.props.destination,
      useNativeDriver: true
    }).start()
  }

  public render() {
    return (
      <Animated.View
        style={{
          height: fieldSize,
          transform: this.state.animatedPosition.getTranslateTransform(),
          width: fieldSize
        }}
      >
        <DraggableSquare animating={this.state.animating} />
      </Animated.View>
    )
  }
}
