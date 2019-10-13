import React, { Component } from "react"
import { Button, View } from "react-native"
import { Position } from "./Position"
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
        <PositionedSquare squarePosition={Position.BottomLeft} />
        <View
          style={{
            marginTop: 40
          }}
        >
          <Button onPress={() => {}} title="Move square" />
        </View>
      </View>
    )
  }
}
