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
    ingredients,
    first_brewed
  } = beer;
  const fixedEbc = ebc > 40 ? 40 : ebc || 1; 
  const fixeMaker = contributed_by.replace(/<\S*>/, "");
  let trim = (str,num) => {
    let result = "";
    const arr = str.slice(0,str.indexOf(" -")).split(" ");
    arr.forEach(w => {
      let str = (`${result} ${w}`).trim();
      result = str.length < num ? str : result; 
    });
    return result;
  };

  return (
    
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={`${styles["ebc-"+fixedEbc]} ${styles["flip-card-front"]}`}>
          <h5>{fixeMaker}</h5>
          <div className={styles['img-container']}>
            <img src={image_url} alt={name}/>
          </div>
          <p className={styles.vol}>ALC:
          <span> {abv}%</span> <br />
            VOLUME
          </p>
          <h3>{trim(name,14)}</h3>
          <p className={styles.since}>Since {first_brewed.slice(-4)}</p>
        </div>
        <div className={styles["flip-card-back"]}>
          
          <div className={`${styles["round-container"]} ${styles["top-container"]}`}>
            <div>
              <p className={styles.description}>{description}</p>
            </div>
          
          </div>
          
          <h4>{trim(name,14)}</h4>
          
          <div className={`${styles["round-container"]} ${styles["bottom-container"]}`}>
            <Ingredients name={name} list={ingredients}/>
          </div>
         
          
          
        </div>
      </div>
    </div>

    
  )
}

export default BeerCard
