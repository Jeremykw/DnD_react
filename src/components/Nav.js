import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavStyle from "./styles/NavStyle";

class Nav extends Component {
  render() {
    return (
      <NavStyle>
        <div></div>
        <Link to="/" className="btn">
          <button>Home</button>
        </Link>
        <Link to="/src" className="btn">
          <button>SRC</button>
        </Link>
        <Link to="/characters" className="btn">
        <button>Characters</button>
        </Link>
        <Link to="/account" className="btn">
          <button>Account</button> 
        </Link>
      </NavStyle>
    );
  }
}

export default Nav;
