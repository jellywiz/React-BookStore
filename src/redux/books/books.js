// Actions
export const ADD = 'React-BookStore/Books/Add';
export const REMOVE = 'React-BookStore/Books/Remove';
export const GET = 'React-BookStore/Books/Get';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return state.concat(action.meta.arg);
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case `${GET}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});

export default booksReducer;
