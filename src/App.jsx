import logo from './logo.svg';
import './App.css';
import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';
import {getBeer} from './services/FetchBeer.js'
import { useState } from 'react';

function App() {
  const [beerList, setBeerList] = useState([]);
  const searchEventHandler = (str)=>{
    getBeer(setBeerList,str);
  };

  return (
    <div className="App">
      <h1>Beer API</h1>
      <SearchBar handler={searchEventHandler}/>
      <BeerList list={beerList}/>
    </div>
  );
}

export default App;