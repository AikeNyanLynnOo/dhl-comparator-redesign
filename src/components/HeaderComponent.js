import React from "react";

function Header({countries,months}) {
  return (
    <React.Fragment>
      <div className="nav-container">
        <nav id="my-nav" className="uk-navbar-container uk-navbar uk-margin ">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="nav-brand uk-margin-medium-right">DHL</li>
              <li>Global Trade Barometer</li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <span uk-icon="social"></span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="header">
        <h3>GLOBAL TRADE</h3>
        <h1>COUNTRY COMPARATOR</h1>
        <p>
          Select between 2 countries and the reporting period to compare trade
          indexes.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Header;
