import React, { Component } from "react"
import { View } from "react-native"
import { Square } from "./Square"

export default class MainView extends Component {
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
        <Square />
      </View>
    )
  }
}
