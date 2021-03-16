import React, { useState } from "react";

/* import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews); */

export default function HeaderPart() {
  return (
    <header className="header_area">
      <div id="header_navbar" className="header_navbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img
                    id="logo-light"
                    src="/images/logo-light.png"
                    alt="Logo"
                  />
                  <img id="logo" src="/images/logo.png" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="page-scroll" href="#home">
                        Accueil
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#courses">
                        Video
                      </a>
                    </li>
                    {/*  <li className="nav-item">
                      <a className="page-scroll" href="#mentors">
                        Mentors
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a className="page-scroll" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="header-btn btn-hover" href="#courses">
                        Commencer
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
