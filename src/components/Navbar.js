import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Link to='/'>
          <h1>
            <i class="fa-solid fa-headphones-simple"></i>
          <i> Music NFTify</i>
          </h1>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
