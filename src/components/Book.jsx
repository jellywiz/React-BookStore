import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <span>
        {title}
        <span> by </span>
        {author}
      </span>
      <button
        type="button"
        onClick={() => dispatch(removeBook({ title, author, id }))}
      >
        Remove
      </button>
    </>
  );
}

export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
