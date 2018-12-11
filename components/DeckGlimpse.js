import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native'
import { white, gray } from '../utils/colors'
import { headerText, metaText } from '../utils/fonts'

const DeckGlimpse = ({ title, cardCount }) => {
  return (
    <View style={styles.deck}>
      <TouchableOpacity onPress={() => alert('Pressed')}>
        <View style={{ alignItems: 'center' }}>
          <Text style={[headerText, { padding: 10, fontSize: 30 }]}>
            {title}
          </Text>
          <Text style={[{ padding: 10 }, metaText]}>
            {cardCount} {cardCount > 1 ? 'cards' : 'card'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    alignItems: 'stretch',
    borderColor: gray,
    borderWidth: 0.5
  }
})

export default DeckGlimpse
