import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-light mb-3 fixed-top"
      style={{ height:"90px",paddingLeft: "5%", paddingRight: "5%" }}
    >
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          {" "}
          <img
            src="https://cdn.shopify.com/s/files/1/0275/7784/3817/files/SW_LOGO_blk_2_copy.png?v=1628708055"
            className="sw-logo"
            alt="new"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button
              className="btn btn-outline-none" style={{backgroundColor:"red", outline:"none"}}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
