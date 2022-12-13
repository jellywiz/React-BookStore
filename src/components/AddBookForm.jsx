import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddFormBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <form>
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
      <button
        type="button"
        onClick={() => {
          dispatch(addBook({ title, author, id: uuidv4() }));
          setAuthor('');
          setTitle('');
        }}
      >
        Add Book
      </button>
    </form>
  );
}

export default AddFormBook;
