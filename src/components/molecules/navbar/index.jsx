import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">xyzPOS</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">Fitur</a>
          </li>
          <li className="nav-item">
          <Link to="/Berlangganan" className="nav-link">Berlangganan</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" type="button" className="btn btn-danger rounded-pill text-capitalize border-light">masuk</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;