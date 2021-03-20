import React, { Fragment } from 'react';
import styles from './Ingredients.module.scss';

const Ingredients = ({list, name}) => {
  const parseList = (list)=> {
    let str = "ingredients: ";
    Object.keys(list).forEach((ingredient,i) => {
      if(i > 0) {str+=", ";}
      let str2 = ingredient;
      console.log(ingredient);
      if ( Array.isArray(list[ingredient])) {
        str2 += "; ";
        
        Object.entries(list[ingredient]).forEach(
          
          ((subIngredient,i) => {
            
          if(i > 0) {str2+=", ";}
          const name = subIngredient[1].name;
          const val = subIngredient[1].amount.value;
          const unit= subIngredient[1].amount.unit.replace("kilo","k").replace("gramms","g");
          console.log(val);
          str2 += name + " " + val +unit;
          
        }));
      }
      str += str2;
    })
    return str;
  };
  return (


    <div>
  <p>{parseList(list)}</p>
    </div>
  )
}

export default Ingredients
