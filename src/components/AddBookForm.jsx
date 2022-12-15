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
    <div className="addBookForm-container">
      <h2>Add a Book</h2>
      <form className="container-flex" onSubmit={postBook}>
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
        <select
          className="categoryInput"
          name="list"
          onChange={(e) => {
            setCategories(e.target.value);
          }}
          required
        >
          <option defaultValue="">Category</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Historical">Historical</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddFormBook;
