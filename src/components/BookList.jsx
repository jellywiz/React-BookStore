import Book from './Book';

function BookList() {
  const books = [
    {
      title: 'Book1',
      author: 'Author1',
    },
    {
      title: 'Book2',
      author: 'Author2',
    },
    {
      title: 'Book3',
      author: 'Author3',
    },
    {
      title: 'Book4',
      author: 'Author4',
    },
    {
      title: 'Book5',
      author: 'Author5',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          <Book title={book.title} author={book.author} />
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
