export const initialDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

// Following structure could be explored if app needs to support card deletion or edit.
// let deck = {
//   React: {
//     title: 'React',
//     questions: ['8xf0y6ziyjabvozdd253nd', '6ni6ok3ym7mf1p33lnez']
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: ['am8ehyc8byjqgar0jgpub9']
//   }
// }

// let cards = {
//   '8xf0y6ziyjabvozdd253nd': {
//     question: 'What is React?',
//     answer: 'A library for managing user interfaces'
//   },
//   '6ni6ok3ym7mf1p33lnez': {
//     question: 'Where do you make Ajax requests in React?',
//     answer: 'The componentDidMount lifecycle event'
//   },
//   am8ehyc8byjqgar0jgpub9: {
//     question: 'What is a closure?',
//     answer:
//       'The combination of a function and the lexical environment within which that function was declared.'
//   }
// }
