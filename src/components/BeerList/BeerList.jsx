import React from 'react';
import BeerCard from '../BeerCard';

const BeerList = ({list}) => {
  return (
    <div> 
     {list.map(beer => <BeerCard key={beer.id} beer={beer}/> )}
     
    </div>
  )
}

export default BeerList
