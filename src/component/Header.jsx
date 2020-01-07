import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// flow or proptype will allow us to do data type safety ..
//flow.org
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navebar-brand">
          {branding}
        </Link>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="link">
              <i class="fa fa-home"></i>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="link">
              <i class="fa fa-plus"></i>Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">
              <i class="fa fa-question"></i>About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "User Manager"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
