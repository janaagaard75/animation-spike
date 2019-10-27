import React, { Component } from "react"
import { View } from "react-native"
import { fieldSize } from "./constants"

export class Field extends Component {
  public render() {
    return (
      <View
        style={{
          height: fieldSize,
          width: fieldSize
        }}
      >
        {this.props.children}
      </View>
    )
  }
}
