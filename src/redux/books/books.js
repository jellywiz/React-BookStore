import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'React-BookStore/Books/Add';
const REMOVE = 'React-BookStore/Books/Remove';
const bookList = [
  { title: 'Book1', author: 'Author1', id: uuidv4() },
  {
    title: 'Book2',
    author: 'Author2',
    id: uuidv4(),
  },
  {
    title: 'Book3',
    author: 'Author3',
    id: uuidv4(),
  },
  {
    title: 'Book4',
    author: 'Author4',
    id: uuidv4(),
  },
  {
    title: 'Book5',
    author: 'Author5',
    id: uuidv4(),
  },
];
// Reducer
export default function booksReducer(state = bookList, action = {}) {
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
