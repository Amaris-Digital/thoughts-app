import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-thoughts">My Thoughts</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/add-my-thought">Add own thought</Link></li>
        <li><Link to="/about">About The App</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
