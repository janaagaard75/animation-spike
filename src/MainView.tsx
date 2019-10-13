import React, { Component } from "react"
import { View } from "react-native"
import { Squares } from "./Squares"

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
        <Squares />
      </View>
    )
  }
}
