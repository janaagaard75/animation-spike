import React, { Component } from "react"
import { View } from "react-native"

export class Square extends Component {
  public render() {
    return (
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 5,
          height: 100,
          width: 100
        }}
      ></View>
    )
  }
}
