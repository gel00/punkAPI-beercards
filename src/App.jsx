import "./App.css";
import BeerList from "./components/BeerList";
import SearchBar from "./components/SearchBar";
import { getBeer } from "./services/FetchBeer.js";
import React, { useState } from "react";
import styles from "./App.module.scss";
import library from "./data/fa-library";

function App() {
  const [beerList, setBeerList] = useState([]);

  const searchEventHandler = (obj) => {
    getBeer(setBeerList, obj);
  };

  return (
    <div className="App">
      <h1>Beer API</h1>
      <SearchBar handler={searchEventHandler} />
      <BeerList list={beerList} />
    </div>
  );
}

export default App;
