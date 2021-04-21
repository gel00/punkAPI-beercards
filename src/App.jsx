import "./App.css";
import BeerList from "./components/BeerList";
import SearchBar from "./components/SearchBar";
import { getBeer } from "./services/FetchBeer.js";
import React, { useState } from "react";

function App() {
  const [beerList, setBeerList] = useState([]);

  const searchEventHandler = (filtersObj) => {
    getBeer(setBeerList, filtersObj);
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
