import React, { Fragment } from 'react'

const Ingredients = ({list, name}) => {
  return (
    <Fragment>
    <h5>Ingredients:</h5>
    <ul>
      {Object.keys(list).map((ingredient,index) => {
        return (
          <li key={name+index}>{ingredient}
            {
            Array.isArray(list[ingredient])&&
            <ul>
              {Object.entries(list[ingredient]).map((subIngredient) => {
                return (
                  <li>{`${subIngredient[1].name}: ${subIngredient[1].amount.value}${subIngredient[1].amount.unit}`}</li>
                );
              })}
            </ul>
            }
          </li>
          
        )
      })}
    </ul>
    </Fragment>
  )
}

export default Ingredients
