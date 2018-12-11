import { ADD_CARD, ADD_DECK } from '../actions/index'
import { initialDecks } from '../utils/_DATA'

const decks = (state = initialDecks, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD:
      const { title, card } = action.info
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat(card)
        }
      }
    default:
      return state
  }
}

export default decks
