import React from "react";
import Region from "./RegionComponent";
import UIkit from "uikit";
import DurationSelectorNavbar from "./DurationSelectorNavbarComponent";
import $ from "jquery";
import { regions } from "../shared/regions";
import TradeIndex from "./TradeIndexComponent";
class RegionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uk: false,
      gm: false,
      cn: false,
      sk: false,
      jp: false,
      usa: false,
      in: false,
      duration: ["September", "October", "November"],
      tabs: {
        0: true,
        1: false,
        2: false,
      },
      showData: {
        val: false,
      },
    };

    this.changeState = this.changeState.bind(this);
    this.compareData = this.compareData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500 && $(window).width() < 1001) {
        $(".dur-select-nav").fadeIn();
      } else {
        $(".dur-select-nav").fadeOut();
      }

      if ($(window).width() > 1000) {
        if ($(this).scrollTop() > 800) {
          $(".dur-select-nav-form").fadeIn();
        } else {
          $(".dur-select-nav-form").hide();
        }
      } else {
        $(".dur-select-nav-form").hide();
      }
    });
  }

  changeState(region) {
    let count = 0;
    for (const rg in this.state) {
      if (this.state[rg] === true) {
        count += 1;
      }
    }
    if (count === 2) {
      if (this.state[region] === true) {
        this.setState({
          [region]: !this.state[region],
        });
      } else {
        this.setState({
          [region]: this.state[region],
        });
        UIkit.notification({
          message: " Deselect one before selecting another",
          pos: "bottom-center",
        });
      }
    } else {
      this.setState({
        [region]: !this.state[region],
      });
    }
    this.setState({
      showData: {
        val: false,
      },
    });
  }
  compareData(e) {
    e.preventDefault();
    this.setState({
      showData: {
        val: true,
      },
    });
    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: $("#trade-indices").offset().top,
        },
        1000
      );
    }, 500);
  }
  scrollToRegionContainer() {
    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: $("body").offset().top,
        },
        1000
      );
    }, 500);
  }
  handleRegionChange(prev, now) {
    this.setState({
      [prev]: false,
      [now.target.value]: true,
    });
  }
  handleChange(e) {
    if (e.target.name === "duration") {
      this.setState({
        [e.target.name]: e.target.value.split(","),
      });
    } else {
      this.changeTab(+e.target.value);
    }
  }
  changeTab(tab) {
    switch (tab) {
      case 0:
        this.setState({ tabs: { 0: true, 1: false, 2: false } });
        break;
      case 1:
        this.setState({ tabs: { 0: false, 1: true, 2: false } });
        break;
      default:
        this.setState({ tabs: { 0: false, 1: false, 2: true } });
    }
  }
  render() {
    let activeRegions = [];
    for (const rg in this.state) {
      if (this.state[rg] === true) {
        activeRegions.push({ [rg]: this.state[rg] });
      }
    }

    const modifiedRegions = regions.map((region) => {
      if (activeRegions.length < 2) {
        region.opt = "normal";
      } else {
        if (
          this.state[region.id] === activeRegions[0][region.id] ||
          this.state[region.id] === activeRegions[1][region.id]
        ) {
          region.opt = "normal";
        } else {
          region.opt = "low";
        }
      }
      return region;
    });
    return (
      <React.Fragment>
        {activeRegions.length === 2 && (
          <DurationSelectorNavbar
            countries={{
              first: Object.keys(activeRegions[0])[0],
              second: Object.keys(activeRegions[1])[0],
            }}
            duration={this.state.duration}
            tabs={this.state.tabs}
            changeTab={this.changeTab}
            handleChange={this.handleChange}
            handleRegionChange={this.handleRegionChange}
            scrollToRegionContainer={this.scrollToRegionContainer}
          />
        )}
        <div id="region-container" className="region-container">
          {modifiedRegions.map((region) => (
            <Region
              region={region}
              key={region.id}
              isActive={this.state[region.id]}
              opt={region.opt}
              changeState={this.changeState}
            />
          ))}
        </div>
        <form className="compare-small">
          <label htmlFor="duration">Reporting Period</label>
          <select
            name="duration"
            className="uk-select"
            id="duration"
            onChange={this.handleChange}
          >
            <option value={["September", "October", "November"]}>
              Sep 2019 - Nov 2019
            </option>
            <option value={["July", "August", "September"]}>
              Jul 2019 - Sep 2019
            </option>
            <option value={["April", "May", "June"]}>
              Apr 2019 - Jun 2019
            </option>
          </select>
          <button
            onClick={this.compareData}
            disabled={activeRegions.length === 2 ? false : true}
            className={activeRegions.length < 2 ? "btn-disabled" : "btn-active"}
          >
            Compare Data
          </button>
        </form>

        {this.state.showData.val && activeRegions.length === 2 && (
          <React.Fragment>
            <div className="fork">
              <img src="fork.png" alt="fork" />
            </div>
            <div className="btn-gp" uk-switcher>
              {this.state.duration.length >= 3 &&
                this.state.duration.map((dur, index) => (
                  <button
                    key={index}
                    className={`${
                      this.state.tabs[index] === true ? "btn-chosen" : "btn"
                    }`}
                    onClick={() => this.changeTab(index)}
                  >
                    {dur}
                  </button>
                ))}
            </div>
            <TradeIndex
              countries={{
                first: Object.keys(activeRegions[0])[0],
                second: Object.keys(activeRegions[1])[0],
              }}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default RegionSelector;
