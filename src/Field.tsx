import React, { FunctionComponent, ReactNode } from "react"
import { View } from "react-native"
import { fieldSize } from "./constants"

export const Field: FunctionComponent = (props: { children: ReactNode }) => (
  <View
    style={{
      height: fieldSize,
      width: fieldSize
    }}
  >
    {props.children}
  </View>
)
