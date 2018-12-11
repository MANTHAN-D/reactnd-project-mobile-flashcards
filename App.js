import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import reducer from './reducers/index'

import { blue } from './utils/colors'

import StatusBar from './components/StatusBar'
import Home from './components/Home'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'

const store = createStore(reducer)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={blue} barStyle="light-content" />
          {/* <Home /> */}
          {/* <AddDeck /> */}
          {/* <DeckView title={'React'} /> */}
          <AddCard title={'React'}/>
        </View>
      </Provider>
    )
  }
}
