import React from 'react';
import BeerCard from '../BeerCard';

const BeerList = ({list}) => {
  return (
    <div>
     <h2>beerlist</h2>
     {list.map(beer => <BeerCard key={beer.id} beer={beer}/> )}
     
    </div>
  )
}

export default BeerList
