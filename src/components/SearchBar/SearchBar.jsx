import React from 'react';
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Range from '../Range';

const SearchBar = ({handler}) => {
  const getText= ({target})=> {
    handler(target.value);
  };

  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-field"]}>
        <label htmlFor="search"><FontAwesomeIcon icon="search" /></label>
        <input id="beer" placeholder="name of the beer" type="text" onChange={getText}/>
        <button><FontAwesomeIcon icon="sliders-h" /></button>
      </div>
      <div className={styles.filter}>
          <Range />
        </div>
    </div>
    
  )
}

export default SearchBar
