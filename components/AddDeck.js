import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Header from './Header'
import SubmitButton from './SubmitButton'

import { red, blue } from '../utils/colors'
import { buttonText, metaText } from '../utils/fonts'
import { addDeck } from '../actions/index'
import { saveDeckTitle } from '../utils/api'

const DUPLICATE_TITLE_ERROR =
  'Deck with same name already exists! Please try agian.'
const EMPTY_FIELD_ERROR = 'Title cannot be empty! Please try agian.'

class AddDeck extends Component {
  state = {
    title: '',
    error: ''
  }

  handleChange = text => {
    const { deckTitles } = this.props

    if (deckTitles.includes(text.trim())) {
      return this.setState({ error: DUPLICATE_TITLE_ERROR })
    }

    this.setState({ title: text, error: '' })
  }

  handleAddDeck = () => {
    const { saveDeck } = this.props
    const { title } = this.state

    if (title === '') {
      return this.setState({
        error: EMPTY_FIELD_ERROR
      })
    }

    if (title === DUPLICATE_TITLE_ERROR) return

    saveDeck(title)

    this.setState({
      title: '',
      error: ''
    })

    this.props.navigation.navigate('Deck', { title: title })

    saveDeckTitle(title)
  }

  render() {
    const { title, error } = this.state
    return (
      <View styles={styles.container}>
        <Header text={'Add Deck'} />
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Deck name"
            placeholderTextColor={blue}
            style={[styles.textBox, metaText]}
            value={title}
            maxLength={50}
            onChangeText={text => this.handleChange(text)}
          />
          {error !== '' && (
            <View style={{ padding: 10 }}>
              <Text style={[metaText, styles.error]}>{error}</Text>
            </View>
          )}
          <SubmitButton
            onPress={this.handleAddDeck}
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
    padding: 15,
    fontSize: 30
  },
  error: {
    color: red,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => {
  return {
    deckTitles: Object.keys(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveDeck: title => dispatch(addDeck(title))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeck)
