import React from "react";
import { FIRST, SECOND } from "../shared/regions";
function TradeIndex({ countries }) {
  return (
    <div id="trade-indices" className="trade-indices">
      TRADE INDEXES
      <div className="index-flex">
        <div className="region-wrap">
          <img
            src={`${countries.first}.png`}
            alt={countries.first}
            className="region-map"
            width="170"
          />
          <img
            src={`${countries.first}_fl.png`}
            alt={countries.first}
            className="region-flag"
            width="60"
          />
        </div>
        <div className="indices">
          {FIRST.slice(0, 3).map((ind, idx) => {
            if (ind >= SECOND[idx]) {
              return (
                <div>
                  <span
                    className="under"
                    style={{
                      width: ind + SECOND[idx] + "%",
                    }}
                  ></span>
                  <span
                    className="upper"
                    style={{
                      width: ind + SECOND[idx] + "%",
                    }}
                  >
                    <span style={{ marginLeft: 20 + "px", fontWeight: 500 }}>
                      {ind}
                    </span>
                  </span>
                  <span className="center-txt">Index Title</span>
                </div>
              );
            } else {
              return (
                <div>
                  <span
                    className="under-right"
                    style={{
                      width: ind + SECOND[idx] + "%",
                    }}
                  ></span>
                  <span
                    className="upper-right"
                    style={{
                      width: ind + SECOND[idx] + "%",
                    }}
                  >
                    <span style={{ marginRight: 20 + "px", fontWeight: 500 }}>
                      {ind}
                    </span>
                  </span>
                  <span className="center-txt">Index Title</span>
                </div>
              );
            }
          })}
        </div>
        <div className="region-wrap">
          <img
            src={`${countries.second}.png`}
            alt={countries.second}
            className="region-map"
            width="170"
          />
          <img
            src={`${countries.second}_fl.png`}
            alt={countries.second}
            className="region-flag"
            width="60"
          />
        </div>
      </div>
    </div>
  );
}

export default TradeIndex;
