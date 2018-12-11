import { ADD_CARD, ADD_DECK, RECIEVE_DECKS } from '../actions/index'

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
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
