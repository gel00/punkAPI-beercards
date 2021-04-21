import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Range from "../Range2";

const SearchBar = ({ handler }) => {
  const [filters, setFilters] = useState({
    alc: {
      min: 0.5,
      max: 18.5,
    },
    color: {
      min: 1,
      max: 40,
    },
  });
  const [name, setName] = useState("");
  const getText = ({ target }) => {
    setName(target.value);
    handler({
      abv_gt: filters.alc.min,
      abv_lt: filters.alc.max,
      ebc_gt: filters.color.min,
      ebc_lt: filters.color.max,
      beer_name: target.value,
    });
  };

  const [isFiltersVisible, toggleFilterVisible] = useState(false);
  //ubdating filter object
  const getFilters = (filtersUpdate) => {
    setFilters({
      ...filters,
      ...filtersUpdate,
    });
    handler({
      abv_gt: filters.alc.min,
      abv_lt: filters.alc.max,
      ebc_gt: filters.color.min,
      ebc_lt: filters.color.max,
      beer_name: name,
    });
  };

  const toggleFilters = () => {
    toggleFilterVisible(!isFiltersVisible);
    //Clear filters when closed
    if (!isFiltersVisible) {
      setFilters({
        alc: {
          min: 0.5,
          max: 18.5,
        },
        color: {
          min: 1,
          max: 40,
        },
      });
    }
    //Fetch new data without any filter
    handler({
      abv_gt: "",
      abv_lt: "",
      ebc_gt: "",
      ebc_lt: "",
      beer_name: name,
    });
  };
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-field"]}>
        <label htmlFor="search">
          <FontAwesomeIcon icon="search" />
        </label>
        <input
          id="beer"
          placeholder="name of the beer"
          type="text"
          onChange={getText}
          autoFocus={true}
          autoComplete={"off"}
        />
        <button onClick={toggleFilters}>
          <FontAwesomeIcon icon="sliders-h" />
        </button>
      </div>
      {isFiltersVisible && (
        <div className={styles.filter}>
          <label>{`${filters.alc.min}% - ${filters.alc.max}%vol `}</label>
          <Range
            onAfterChange={(value) => {
              getFilters({ alc: { min: value[0], max: value[1] } });
            }}
            min={0.5}
            max={18.5}
            step={0.5}
            defaultValue={[0.5, 18.5]}
            tipFormatter={(value) => `${value}%`}
          />
          <div className={styles["beer-cups"]}>
            <div
              className={`${styles["beer-color"]} ${
                styles["ebc-" + filters.color.min]
              }`}
            >
              <label htmlFor="" className={`${styles.beer} `}></label>
            </div>
            <p>{` - `}</p>
            <div
              className={`${styles["beer-color"]} ${
                styles["ebc-" + filters.color.max]
              }`}
            >
              <label htmlFor="" className={`${styles.beer} `}></label>
            </div>
          </div>

          <Range
            onAfterChange={(value) => {
              getFilters({ color: { min: value[0], max: value[1] } });
            }}
            min={1}
            max={40}
            step={1}
            defaultValue={[1, 40]}
            tipFormatter={(value) => `${value}`}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
