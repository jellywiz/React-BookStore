import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getBooks } from '../redux/books/Book-api';
import Book from './Book';

function BookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <ul className="bookList">
      {books.map((book) => (
        <li key={book.title}>
          <Book key={book.item_id} BOOK={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
