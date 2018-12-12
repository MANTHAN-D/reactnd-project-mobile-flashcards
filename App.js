import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { View, Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { createAppContainer } from '@react-navigation/native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import reducer from './reducers/index'

import { blue, white } from './utils/colors'
import { setLocalNotification } from './utils/notifications'

import StatusBar from './components/StatusBar'
import Home from './components/Home'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Result from './components/Result'

const store = createStore(reducer)

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
            size={30}
            color={tintColor}
          />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        }
      }
    }
  }
)

const MainNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Tabs
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        }
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        }
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        }
      }
    },
    Result: {
      screen: Result,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue
        }
      }
    }
  })
)

export default class App extends React.Component {
  componentDidMount = () => {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
