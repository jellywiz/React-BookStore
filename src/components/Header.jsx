import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <h1>Bookstore</h1>
      <ul>
        <li>
          <NavLink to="/" className="links">
            Books
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="Categories" className="links">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
