import React from 'react'
import { View, StatusBar as NativeStatusBar } from 'react-native'
import { Constants } from 'expo'

const StatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <NativeStatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  )
}

export default StatusBar
