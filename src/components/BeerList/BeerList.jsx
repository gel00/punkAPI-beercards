import React, { useState } from 'react';
import BeerCard from '../BeerCard';
import styles from './BeerList.module.scss';

const BeerList = ({list}) => {
  const [largeCardId, setLargeCardId] = useState(null);
  const enlarge = id => setLargeCardId(id);
  const close = () => setLargeCardId(null);

  return (
    <div> 
     {list.map((beer,index) => <BeerCard index={index} key={beer.id} beer={beer} handler={enlarge}/> )}
     {
      largeCardId !== null &&
      <div className={styles.banner} onClick={close} >
        <BeerCard index={null} key={"largebeer"} beer={list[largeCardId]} handler={close}/>
      </div>
     }
     
    </div>
  )
}

export default BeerList
