import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/Book-api';

function Book({ BOOK }) {
  const {
    title,
    author,
    // eslint-disable-next-line camelcase
    item_id,
    category,
  } = BOOK;
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <span>
          {title}
          <span> by </span>
          {author}
        </span>
        <span>
          Category:
          {category}
        </span>
        <button type="button" onClick={() => dispatch(removeBook(item_id))}>
          Remove
        </button>
      </ul>
    </div>
  );
}
Book.defaultProps = {
  BOOK: {
    title: '',
    author: '',
    item_id: '',
    category: '',
  },
};

Book.propTypes = {
  BOOK: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
    category: PropTypes.string.isRequired,
  }),
};

export default Book;
