import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import Header from './Header'
import SubmitButton from './SubmitButton'

import { buttonText, metaText } from '../utils/fonts'
import { blue, red } from '../utils/colors'

import { addCard } from '../actions/index'
import { addCardToDeck } from '../utils/api'

const EMPTY_FIELD_ERROR =
  'Question or answer cannot be empty! Please try agian.'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    error: ''
  }

  handleAddCard = () => {
    const { title, saveCard } = this.props
    const { question, answer } = this.state

    if (question === '' || answer === '') {
      return this.setState({
        error: EMPTY_FIELD_ERROR
      })
    }

    const info = {
      title,
      card: {
        question,
        answer
      }
    }

    saveCard(info)

    this.setState({
      question: '',
      answer: '',
      error: ''
    })

    //navigate to DeckView

    addCardToDeck(title, info.card)

    // clear/update notifications
  }

  render() {
    const { question, answer, error } = this.state
    const { title } = this.props
    return (
      <View styles={styles.container}>
        <Header text={title} />
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Your Question"
            placeholderTextColor={blue}
            style={[styles.textBox, metaText]}
            value={question}
            maxLength={250}
            onChangeText={text => this.setState({ question: text, error: '' })}
          />
          <TextInput
            placeholder="Your Answer"
            placeholderTextColor={blue}
            style={[styles.textBox, metaText]}
            value={answer}
            maxLength={250}
            onChangeText={text => this.setState({ answer: text, error: '' })}
          />
          {error !== '' && (
            <View style={{ padding: 10 }}>
              <Text style={[metaText, styles.error]}>{error}</Text>
            </View>
          )}
          <SubmitButton
            onPress={this.handleAddCard}
            style={{ margin: 60 }}
            textStyle={buttonText}
          >
            Add
          </SubmitButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  formContainer: {
    padding: 10,
    marginTop: 60,
    justifyContent: 'space-between'
  },
  textBox: {
    height: 70,
    borderColor: blue,
    borderWidth: 0.5,
    padding: 10,
    fontSize: 30,
    margin: 20
  },
  error: {
    color: red,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  }
})

const mapDispatchToProps = dispatch => {
  return {
    saveCard: info => dispatch(addCard(info))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCard)
