import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import reducer from './reducers/index'

import { blue } from './utils/colors'

import StatusBar from './components/StatusBar'
import Home from './components/Home'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

const store = createStore(reducer)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={blue} barStyle="light-content" />
          {/* <Home /> */}
          {/* <AddDeck /> */}
          {/* <Deck title={'React'} /> */}
          {/* <AddCard title={'React'}/> */}
          <Quiz title={'React'} />
        </View>
      </Provider>
    )
  }
}
