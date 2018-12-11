import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'
import { recieveDecks } from '../actions/index'

import DeckGlimpse from './DeckGlimpse'
import Header from './Header'

class Home extends Component {
  state = {
    ready: false
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    getDecks()
      .then(decks => dispatch(recieveDecks(decks)))
      .then(() =>
        this.setState({
          ready: true
        })
      )
  }

  render() {
    const { ready } = this.state
    const { decks } = this.props

    if (!ready) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Header text={'Decks'} />
        {Object.keys(decks).map(title => {
          const cardCount = decks[title].questions.length
          return <DeckGlimpse cardCount={cardCount} title={title} key={title} />
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})
const mapStateToProps = state => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Home)
