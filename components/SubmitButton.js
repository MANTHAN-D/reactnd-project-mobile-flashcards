import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { blue, white } from '../utils/colors'

const TextButton = ({ children, onPress, style = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn,
        style
      ]}
    >
      <Text style={[styles.submitBtnText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
})

export default TextButton
