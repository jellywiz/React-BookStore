import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD, REMOVE, GET } from './books';

// eslint-disable-next-line operator-linebreak
const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9vAaApmkWC4J0f3eZSGy/books';

export const getBooks = createAsyncThunk(GET, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export const addBook = createAsyncThunk(ADD, async (book) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export const removeBook = createAsyncThunk(REMOVE, async (itemId) => {
  await fetch(`${URL}/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
