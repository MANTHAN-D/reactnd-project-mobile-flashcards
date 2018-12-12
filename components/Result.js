import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SubmitButton from './SubmitButton'

import { buttonText, headerText, metaText } from '../utils/fonts'
import { white, blue, orange } from '../utils/colors'

const Result = props => {
  const { navigation } = props
  const { percentage, title } = navigation.state.params
  return (
    <View style={styles.container}>
      <View style={styles.resultInfo}>
        <Text style={[headerText, styles.resultIntoText]}>
          Hooray! You have completed the quiz!
        </Text>
      </View>
      <View style={styles.resultInfo}>
        <Text style={[headerText, styles.resultPercentText]}>
          You scored {percentage}%
        </Text>
      </View>
      <View style={styles.resultActions}>
        <SubmitButton
          style={styles.backToSubmitBtn}
          textStyle={buttonText}
          onPress={() => navigation.navigate('Deck', { title: title })}
        >
          Back To Deck
        </SubmitButton>
        <SubmitButton
          style={styles.startOverSubmitBtn}
          textStyle={[styles.startOverBtnTxt, buttonText]}
          onPress={() => navigation.navigate('Quiz', { title: title })}
        >
          Start Over
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 30,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  resultInfo: {
    padding: 20
  },
  resultActions: {
    padding: 30,
    paddingBottom: 100
  },
  resultIntoText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 25,
    color: orange
  },
  resultPercentText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 30,
    color: blue
  },
  startOverSubmitBtn: {
    margin: 20,
    color: blue,
    backgroundColor: white,
    borderWidth: 4,
    borderColor: blue,
    height: 60
  },
  backToSubmitBtn: {
    margin: 20,
    height: 60
  },
  startOverBtnTxt: {
    color: blue
  }
})

export default Result
