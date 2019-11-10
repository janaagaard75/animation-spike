import React, { FunctionComponent, ReactNode } from "react"
import { View } from "react-native"
import { Constants } from "./Constants"

export const Field: FunctionComponent = (props: { children: ReactNode }) => (
  <View
    style={{
      height: Constants.fieldSize,
      width: Constants.fieldSize
    }}
  >
    {props.children}
  </View>
)
