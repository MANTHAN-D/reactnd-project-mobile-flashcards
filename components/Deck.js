import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SubmitButton from './SubmitButton'
import { headerText, metaText, buttonText } from '../utils/fonts'
import { blue, white } from '../utils/colors'

const Deck = props => {
  const { title, deck, navigation } = props
  const cardCount = deck ? deck.questions.length : 0
  return (
    <View style={styles.container}>
      <View style={styles.deckInfo}>
        <Text style={[styles.deckInfoText, headerText]}>{title}</Text>
        <Text style={[styles.deckInfoText, metaText]}>
          {cardCount} {cardCount > 1 ? 'cards' : 'card'}
        </Text>
      </View>
      <View style={styles.deckActions}>
        <SubmitButton
          style={styles.addCardSubmitBtn}
          textStyle={[styles.addCardBtnTxt, buttonText]}
          onPress={() => navigation.navigate('AddCard', { title: title })}
        >
          Add Card
        </SubmitButton>
        <SubmitButton
          style={styles.startQuizSubmitBtn}
          textStyle={buttonText}
          onPress={() =>
            cardCount > 0
              ? navigation.navigate('Quiz', { title: title })
              : alert('Oops! No cards to start quiz.')
          }
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
const mapStateToProps = (state, { navigation }) => {
  const { title } = navigation.state.params
  return {
    title,
    deck: title && state[title] ? state[title] : null
  }
}

export default connect(mapStateToProps)(Deck)
