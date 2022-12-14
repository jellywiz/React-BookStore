import { createAsyncThunk } from '@reduxjs/toolkit';
import { CHECK } from './categories';

// eslint-disable-next-line operator-linebreak
const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9vAaApmkWC4J0f3eZSGy/books';

const getCategories = createAsyncThunk(CHECK, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export default getCategories;
