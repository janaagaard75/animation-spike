import React, { Component } from "react"
import { View, ViewStyle } from "react-native"
import { Square } from "./Square"

const containerStyles: ViewStyle = {
  alignItems: "center",
  backgroundColor: "#fff",
  flex: 1,
  justifyContent: "center"
}

export default class MainView extends Component {
  public render() {
    return (
      <View style={containerStyles}>
        <Square />
      </View>
    )
  }
}
