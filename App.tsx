import React from "react"
import { View, ViewStyle } from "react-native"

const containerStyles: ViewStyle = {
  alignItems: "center",
  backgroundColor: "#fff",
  flex: 1,
  justifyContent: "center"
}

const Square = () => {
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

export default function App() {
  return (
    <View style={containerStyles}>
      <Square />
    </View>
  )
}
