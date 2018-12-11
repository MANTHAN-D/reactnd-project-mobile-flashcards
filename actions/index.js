export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const recieveDecks = decks => {
  return {
    type: RECIEVE_DECKS,
    decks
  }
}

export const addDeck = title => {
  return {
    type: ADD_DECK,
    title
  }
}

export const addCard = info => {
  return {
    type: ADD_CARD,
    info
  }
}
