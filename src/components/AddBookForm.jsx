import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Book-api';

function AddFormBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategories] = useState('');

  function postBook(e) {
    e.preventDefault();

    dispatch(
      addBook({
        title,
        author,
        category,
        item_id: uuidv4(),
        // eslint-disable-next-line comma-dangle
      })
    );
    setTitle('');
    setAuthor('');
    setCategories('');
  }
  return (
    <form onSubmit={postBook}>
      <h2>Add a book</h2>
      <input
        placeholder="Book Title"
        type="text"
        name="title"
        value={title}
        onInput={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author Name"
        type="text"
        name="author"
        value={author}
        onInput={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Category"
        type="text"
        name="category"
        value={category}
        onInput={(e) => setCategories(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddFormBook;
