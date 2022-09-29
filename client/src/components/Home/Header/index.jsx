import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <header className="home-header">
    <div className="top-bar">
      <div className="top-left">
        <h3 className="logo">TUSTOZ</h3>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          color="black"
          className="top-icon"
        />
        <FontAwesomeIcon
          icon={faTwitterSquare}
          color="black"
          className="top-icon"
        />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          color="black"
          className="top-icon"
        />
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <Link className="link" to="/settings">
          <img
            className="top-image"
            src="https://avatars.githubusercontent.com/u/76657906?v=4"
            alt=""
          />
        </Link>
      </div>
    </div>
    <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
);

export default Header;
