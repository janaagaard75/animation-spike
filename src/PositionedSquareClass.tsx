import React, { Component } from "react"
import { Animated } from "react-native"
import { fieldSize } from "./constants"
import { Coordinates } from "./Coordinates"
import { Square } from "./Square"

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
    Animated.timing(this.state.animatedPosition, {
      duration: 1000,
      toValue: this.props.destination
    }).start()
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
