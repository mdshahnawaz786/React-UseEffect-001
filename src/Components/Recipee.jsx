import React from 'react'
import './recipee.css'

const Recipee = ({data}) => {
  return (
    <div className='container'>
      {data &&
        data.map((ele) => {
          return (
            <div className="recipeContainer">

              <div className="recipeeHeader">
              <p className='paraHead'>Dishtype:  
                <span className='dishTypeTitle'> {ele.recipe.dishType[0].toUpperCase()}</span>
              </p>
              <p className='paraHead'>Cuisine Type:   
              <span className='dishTypeTitle'> {ele.recipe.cuisineType[0].toUpperCase()}</span>
              </p>
              </div>


              <div className="imgDiv">
              <img src={ele.recipe.image} alt="" />
              </div>


              <div className="ingredients">
                <h5>INGREDIENTS:</h5>

                {ele.recipe.ingredients.map((val) => {
                  return (
                    <div className="ingredientsContainer">
                      <h6>{val.text}</h6>
                    </div>
                  );
                })}
              </div>
             
            </div>
          );
        })}
    </div>
  )
}

export default Recipee
