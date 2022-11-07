import React from "react";

function Region({ region, isActive, changeState, opt }) {
  return (
    <div
      className={`region-${region.id} ${opt}`}
      uk-tooltip={region.name}
    >
      {isActive && (
        <img
          src={`${region.id}_active.png`}
          alt={region.id}
          style={{ width: 100 + "%", height: 100 + "%" }}
          onClick={() => changeState(region.id)}
        />
      )}
      {!isActive && (
        <img
          src={`${region.id}.png`}
          alt={region.id}
          style={{ width: 100 + "%", height: 100 + "%" }}
          onClick={() => changeState(region.id)}
        />
      )}
      <img
        src={`${region.id}_fl.png`}
        alt={region.id}
        className={`fl ${region.id}-fl`}
        onClick={() => changeState(region.id)}
      />
    </div>
  );
}

export default Region;
