import React from "react";
import { regions } from "../shared/regions";
// import uk from "../../public/uk_fl.png";
function getActiveOption(tabs) {
  for (const tab in tabs) {
    if (tabs[tab] === true) {
      return tab;
    }
  }
}
function DurationSelectorNavbar({
  countries,
  months,
  duration,
  tabs,
  changeTab,
  handleChange,
  handleRegionChange,
  scrollToRegionContainer,
}) {
  return (
    <React.Fragment>
      <div className="dur-select-nav">
        <div className="top">
          <span>
            <img
              src={`${countries.first}_fl.png`}
              alt={countries.first}
              style={{ width: 20 + "px", height: 20 + "px" }}
            />
            <span
              style={{
                fontWeight: 500,
                marginRight: 10 + "px",
                marginLeft: 10 + "px",
              }}
            >
              {regions
                .filter((rg) => rg.id === countries.first)[0]
                .name.toUpperCase()}
            </span>
            VS
            <span
              style={{
                fontWeight: 500,
                marginLeft: 10 + "px",
                marginRight: 10 + "px",
              }}
            >
              {regions
                .filter((rg) => rg.id === countries.second)[0]
                .name.toUpperCase()}
            </span>
            <img
              src={`${countries.second}_fl.png`}
              alt={countries.second}
              style={{ width: 20 + "px", height: 20 + "px" }}
            />
          </span>
          <span
            style={{ color: "#d40511", cursor: "pointer" }}
            onClick={scrollToRegionContainer}
          >
            <span uk-icon="settings"></span> Change
          </span>
        </div>
        <div className="tabs">
          {duration.map((dur, index) => (
            <span
              key={index}
              className={`${
                tabs[index] === true ? "btn-tab-chosen" : "btn-tab"
              }`}
              onClick={() => changeTab(index)}
            >
              {dur.substring(0, 3)}
            </span>
          ))}
        </div>
      </div>
      <div className="dur-select-nav-form">
        <span className="txt">Country Comparator</span>
        <div className="flex-nav">
          <select
            name="first"
            className="uk-select"
            id="duration"
            onChange={(e) => handleRegionChange(countries.first, e)}
            defaultValue={countries.first}
          >
            {regions.map((rg, idx) => (
              <React.Fragment>
                <option
                  key={idx}
                  value={rg.id}
                  disabled={rg.id === countries.second ? "disabled" : ""}
                  className={rg.id === countries.second ? "lowOpt" : ""}
                >
                  {rg.name}
                </option>
              </React.Fragment>
            ))}
          </select>
          <span>VS</span>
          <select
            name="second"
            className="uk-select"
            id="duration"
            onChange={(e) => handleRegionChange(countries.second, e)}
            defaultValue={countries.second}
          >
            {regions.map((rg, idx) => (
              <option
                key={idx}
                value={rg.id}
                disabled={rg.id === countries.first ? "disabled" : ""}
                className={rg.id === countries.first ? "lowOpt" : ""}
              >
                {rg.name}
              </option>
            ))}
          </select>
          <select
            name="month"
            className="uk-select"
            id="duration"
            onChange={handleChange}
            value={getActiveOption(tabs)}
          >
            {duration.map((dur, idx) => (
              <option key={idx} value={idx}>
                {dur} - 2019
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DurationSelectorNavbar;
