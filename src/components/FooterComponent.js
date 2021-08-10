import React from "react";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <a href="#" className="footer-link">
          <span uk-icon="chevron-down"></span>
          <span>Explore the report</span>
          <p>Global Index</p>
        </a>
        <img src="bg-globe.png" className="footer-globe" alt="globe" />
      </div>
      <img
        src="bot.png"
        className="footer-bot"
        uk-toggle="target: .toggle"
        alt="bot"
      />
      <div className="uk-card uk-card-default uk-card-body toggle bot-noti">
        <span>Are you looking for air freight and ocean freight quotes?</span>
        <span
          uk-icon="close"
          className="uk-icon-button uk-position-top-right btn-close"
          uk-toggle="target: .toggle"
        ></span>
        <button className="uk-button btn-primary">Find out more</button>
      </div>
    </div>
  );
}

export default Footer;
