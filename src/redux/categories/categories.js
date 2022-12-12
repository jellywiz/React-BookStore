// actions
const CHECK = 'React-BookStore/categories/Check';

// reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return action.payload;
    default:
      return state;
  }
}

// action creators
export const checkStatus = () => ({
  type: CHECK,
  payload: 'Work in Progress',
});
