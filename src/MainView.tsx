import React, { Component } from "react"
import { View } from "react-native"
import { PositionedSquare } from "./PositionedSquare"

export class MainView extends Component {
  public render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <PositionedSquare />
      </View>
    )
  }
}
