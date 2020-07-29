import React from 'react'
import {navigateToUrl} from 'single-spa';
import '../App.css';


const Nav = () => (
  <nav>
    <div id="main">
      <div>
        <h2>Micro-Frontend using Single-spa Framework </h2>
      </div>
      <ul className="nav-links">
        <li ><a href="/" onClick={navigateToUrl}>Home</a></li>
        <li ><a href="/zomato" onClick={navigateToUrl}>Zomato</a></li>
        <li ><a href="/form" onClick={navigateToUrl}>Form</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav