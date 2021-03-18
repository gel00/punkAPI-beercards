import React from 'react';
import Ingredients from '../Ingredients'
import styles from './BeerCard.module.scss';

const BeerCard = ({beer}) => {
  const {
    image_url,
    name,
    tagline,
    description,
    abv,
    ibu,
    ebc,
    contributed_by,
    ingredients
  } = beer;
  const fixedEbc = ebc > 40 ? 40 : ebc; 
  const fixeMaker = contributed_by.replace(/<\S*>/, "");

  return (
    
    <div class={styles["flip-card"]}>
      <div class={styles["flip-card-inner"]}>
        <div class={styles["flip-card-front"]}>
          <h3>{name}</h3>
          <img src={image_url} alt={name}/>
          <p>{description}</p>
        </div>
        <div class={styles["flip-card-back"]}>
          <h4>{name}</h4>
          <h5>contributed by: {fixeMaker}</h5>
          <q>{tagline}</q>
          <p>vol.: {abv}%</p>
          <label for="bitterness">{"Bitterness: "}</label>
          {ibu ?
            <progress id="bitterness" value={ibu} max="100"></progress> :
            <p>N/A</p>
          }
          <p>
            <span>Beer color:</span>
            {ebc ?
              <div className={`${styles["ebc-"+fixedEbc]} ${styles.ebc}`}></div> :
              <span>N/A</span>
            }
          </p>
          <Ingredients name= {name} list={ingredients}/>
        </div>
      </div>
    </div>

    
  )
}

export default BeerCard
