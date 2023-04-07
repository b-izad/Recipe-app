import React from 'react';
import './App.css';

function Recipe({title,img , serving, time, source}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Servings: for {serving} people.</p>
      <p> Gets ready in {time} minutes!</p>
      <img className='image' src={`https://spoonacular.com/recipeImages/${img}`}/>
      <p>You can find thie recipe <a href= {source}>here</a>!</p>
    </div>
  )
}

export default Recipe
