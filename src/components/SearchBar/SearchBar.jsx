import React, { useState } from 'react';
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Range from '../Range';

const SearchBar = ({handler}) => {
  const [filters,setFilters] = useState({});
  const [name, setName] = useState("");
  const getText= ({target})=> {
    setName(target.value);
    handler({
      alc : filters.alc,
      color : filters.color,
      name : target.value
    });
  };

  const getFilters = (alc,color)=>{
    setFilters({
      alc: alc,
      color: color
    });
    handler({
      alc : alc,
      color : color,
      name : name
    });
  };
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-field"]}>
        <label htmlFor="search"><FontAwesomeIcon icon="search" /></label>
        <input id="beer" placeholder="name of the beer" type="text" onChange={getText}/>
        <button><FontAwesomeIcon icon="sliders-h" /></button>
      </div>
      <div className={styles.filter}>
          <Range getFilters={getFilters}/>
        </div>
    </div>
    
  )
}

export default SearchBar
