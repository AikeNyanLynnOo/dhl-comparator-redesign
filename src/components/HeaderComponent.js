import React from "react";

function Header() {
  return (
    <div>
      <nav id="my-nav" class="uk-navbar-container uk-navbar uk-margin ">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="nav-brand uk-margin-medium-right">DHL</li>
            <li>Global Trade Barometer</li>
          </ul>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <span uk-icon="social"></span>
            </li>
          </ul>
        </div>
      </nav>
      <div class="header">
        <h2>GLOBAL TRADE</h2>
        <h1>COUNTRY COMPARATOR</h1>
        <p>
          Select between 2 countries and the reporting period to compare trade
          indexes.
        </p>
      </div>
    </div>
  );
}

export default Header;
