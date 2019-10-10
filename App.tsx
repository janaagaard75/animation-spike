import React from "react"
import { Text, View, ViewStyle } from "react-native"

const containerStyles: ViewStyle = {
  alignItems: "center",
  backgroundColor: "#fff",
  flex: 1,
  justifyContent: "center"
}

export default function App() {
  return (
    <View style={containerStyles}>
      <Text>Open up App.tsx to start working on your app.</Text>
    </View>
  )
}
