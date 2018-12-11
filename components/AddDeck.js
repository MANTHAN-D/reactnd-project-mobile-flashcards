import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { gray, red } from '../utils/colors'

import Header from './Header'
import SubmitButton from './SubmitButton'

import { buttonText, metaText } from '../utils/fonts'

const DUPLICATE_TITLE_ERROR =
  'Deck with same name already exists! Please try agian.'

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

    this.setState({ title: text })
  }

  handleAddDeck = () => {}

  render() {
    const { title, error } = this.state
    return (
      <View styles={styles.container}>
        <Header text={'Add Deck'} />
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Deck name"
            style={styles.textBox}
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
    height: 60,
    borderColor: gray,
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
  console.log(state)
  return {
    deckTitles: Object.keys(state)
  }
}

export default connect(mapStateToProps)(AddDeck)
