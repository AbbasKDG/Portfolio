import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
