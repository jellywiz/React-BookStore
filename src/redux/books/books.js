// Actions
const ADD = 'React-BookStore/books/ADD';
const REMOVE = 'React-BookStore/books/Remove';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

// side effects, only as applicable
// e.g. thunks, epics, etc
export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
