import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Click = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
          <div className="container-fluid ">
            <Link className="navbar-brand " to="/home">
              <span className="logo text-dark fs-1 fw-bold">Pizza</span>
              <span className="text-warning fs-2 fw-bold">spot.</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex ms-auto" role="search">
                <ul className="navbar-nav d-flex ms-auto fs-5 ">
                  <li className="nav-item ">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/signup">
                      SignUp
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Click;
