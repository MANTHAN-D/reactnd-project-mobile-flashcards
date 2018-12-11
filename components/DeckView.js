import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SubmitButton from './SubmitButton'
import { headerText, metaText, buttonText } from '../utils/fonts'
import { blue, white } from '../utils/colors'
//Todo: implement onpress navigation for Add Card and Start Quiz
//Todo: clean up mapStateToProps to return null

const DeckView = props => {
  const { deck } = props
  const cardCount = deck ? deck.questions.length : 0
  return (
    <View style={styles.container}>
      <View style={styles.deckInfo}>
        <Text style={[styles.deckInfoText, headerText]}>{deck.title}</Text>
        <Text style={[styles.deckInfoText, metaText]}>
          {cardCount} {cardCount > 1 ? 'cards' : 'card'}
        </Text>
      </View>
      <View style={styles.deckActions}>
        <SubmitButton
          style={styles.addCardSubmitBtn}
          textStyle={[styles.addCardBtnTxt, buttonText]}
          onPress={() => {}}
        >
          Add Card
        </SubmitButton>
        <SubmitButton
          style={styles.startQuizSubmitBtn}
          textStyle={buttonText}
          onPress={() => {}}
        >
          Start Quiz
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
  deckInfo: {
    padding: 30
  },
  deckActions: {
    padding: 30,
    paddingBottom: 100
  },
  deckInfoText: {
    textAlign: 'center',
    padding: 20
  },
  addCardSubmitBtn: {
    margin: 20,
    color: blue,
    backgroundColor: white,
    borderWidth: 4,
    borderColor: blue,
    height: 60
  },
  startQuizSubmitBtn: {
    margin: 20,
    height: 60
  },
  addCardBtnTxt: {
    color: blue
  }
})
const mapStateToProps = (state, { title }) => {
  return {
    deck:
      title && state[title]
        ? state[title]
        : { title: 'React', questions: [1, 3, 3] }
  }
}

export default connect(mapStateToProps)(DeckView)
