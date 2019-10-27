import React, { FunctionComponent } from "react"
import { View } from "react-native"
import { fieldSize } from "./constants"

export const Field: FunctionComponent = props => (
  <View
    style={{
      height: fieldSize,
      width: fieldSize
    }}
  >
    {props.children}
  </View>
)
