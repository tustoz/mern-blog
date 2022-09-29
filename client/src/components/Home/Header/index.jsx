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
          <li className="top-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <Link className="link" to="/settings">
          <img
            className="top-image"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
