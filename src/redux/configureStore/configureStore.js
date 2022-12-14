import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from '../books/books';
import categoriesReducer from '../categories/categories';

const bookReducers = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({
  reducer: bookReducers,
});

export default store;
