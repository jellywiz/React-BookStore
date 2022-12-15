/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/Book-api';
import 'react-circular-progressbar/dist/styles.css';

function Book({ BOOK }) {
  const {
    title,
    author,
    // eslint-disable-next-line camelcase
    item_id,
    category,
  } = BOOK;
  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState(0);
  const changeProgress = () => {
    if (percentage < 100) {
      setPercentage(percentage + 5);
    }

    if (percentage === 100) {
      dispatch(removeBook(item_id));
    }
  };

  return (
    <div className="bookContainer">
      <div className="container-flex-col">
        <span className="bookCategory">{category}</span>
        <h2 className="bookTitle">{title}</h2>
        <span className="bookAuthor">{author}</span>
        <div className="bottomLinks container-flex">
          <button className="bookRemoveButton" type="button">
            Comments
          </button>
          <div className="Line-2" />
          <button
            className="bookRemoveButton"
            type="button"
            onClick={() => {
              dispatch(removeBook(item_id));
            }}
          >
            Remove
          </button>
          <div className="Line-2" />
          <button className="bookRemoveButton" type="button">
            Edit
          </button>
        </div>
      </div>
      <div> </div>
      <div className="completedness">
        <div className="bar">
          <CircularProgressbar value={percentage} />
          <div className="barinfo">
            <div>{percentage}%</div>
            <div className="percentCompleted">Completed</div>
          </div>
        </div>
        <div className="Line-3" />
        <div className="progress container-flex-col">
          <span>CURRENT CHAPTER</span>
          <span>Chapter 21</span>
          <button
            className="updateProgressButton"
            type="button"
            onClick={changeProgress}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
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
