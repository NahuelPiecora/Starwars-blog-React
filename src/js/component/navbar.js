import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
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
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
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
