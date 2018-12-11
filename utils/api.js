import { AsyncStorage } from 'react-native'
import { initialDecks } from './_DATA'

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

const setUpInitialData = () => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks))
  return initialDecks
}
const formatDecks = decks => {
  return decks === '{}' || decks === null
    ? setUpInitialData()
    : JSON.parse(decks)
}

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDecks)
}

export const getDeck = id => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => {
    const decks = JSON.parse(data)
    return decks[id] ? decks[id] : null
  })
}

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )
}

export const addCardToDeck = (title, card) => {
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    if (data[title] && data[title].questions)
      data[title].questions = data[title].questions.concat(card)

    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}
