import React from "react";
import '../styles/Header.css'
const Header = (props) => {
  return (
    <header className="header">
      <h2>{props.text}</h2>
    </header>);
};
export default Header;