import React, { useState } from "react";
import styles from "./Range.module.scss";

const Range2 = ({ getFilters }) => {
  const [alc, setAlc] = useState(10);
  const [color, setColor] = useState(20);
  const eventHandlerAlc = ({ target }) => {
    setAlc(target.value);
    getFilters(target.value, color);
  };
  const eventHandlerColor = ({ target }) => {
    setColor(target.value);
    getFilters(alc, target.value);
  };
  return (
    <>
      <label htmlFor="">{parseFloat(alc).toFixed(1)}% vol.</label>
      <input
        type="range"
        min="0.5"
        max="55"
        step="0.5"
        id="myRange"
        value={alc}
        onChange={eventHandlerAlc}
      />
      <div className={`${styles["beer-color"]} ${styles["ebc-" + color]}`}>
        <label htmlFor="" className={`${styles.beer} `}></label>
      </div>

      <input
        type="range"
        min="1"
        max="40"
        step="1"
        id="myRange"
        value={color}
        onChange={eventHandlerColor}
      />
    </>
  );
};

export default Range;
