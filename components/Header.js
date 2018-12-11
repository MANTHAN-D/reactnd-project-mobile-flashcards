import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { orange } from '../utils/colors'
import { headerText } from '../utils/fonts'

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={[headerText, styles.headerTxt]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10
  },
  headerTxt: {
    fontSize: 40,
    color: orange
  }
})
export default Header
