import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Bookstore CMS</h1>
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
