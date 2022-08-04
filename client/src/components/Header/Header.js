import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ contactUsRef }) {
  const use = () => contactUsRef.current.scrollIntoView();
  return (
    <div className="header">
      <div className="icon-div">
        <img
          alt="header-img"
          className="header-icon"
          src="./images/mylogo.png"
        />
      </div>
      <div className="info">
        <h3>
          <Link className="linkhome" to="/">
            Home
          </Link>
        </h3>
      </div>

      <div className="info" onClick={use}>
        <h3>About us</h3>
      </div>

      <div className="info" onClick={use}>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default Header;
