import './App.css';
import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import Footer from './Footer';

function App() {

  

const [recipes, setRecipe] = useState([]);
const [search, setSearch] =  useState('');
const [query, setQuery] = useState('');

const example_req = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=dc56912db9104bb7a114fa44fabbc4ed`

useEffect(()=>{
  getR()
} , [query]);

const getR = async () => {
  try{
  const res = await fetch (example_req)
  const data = await res.json()
  setRecipe(data.results)}
  catch(error){console.log(error)}
}

const updateSearch = e => {
  if (e && e.target) {
    setSearch(e.target.value);
  }
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
}

console.log(recipes)

  return (
    <div className="App">
 <h1 className="heading">Find Your Favorite Recipe Here!</h1>
    <form onSubmit={getSearch} className="search">
      <input className="search-bar" type="text" value = {search} onChange={updateSearch}/>
      <button className="search-button" type="submit"> Go!
        </button>

      
    </form>
    <div className="recipe-container">
  {recipes.length > 0 ? (
    recipes.map((recipe, index) => (
      <div className="recipess" key={index}>
        <Recipe
          title={recipe.title}
          img={recipe.image}
          serving={recipe.servings}
          time={recipe.readyInMinutes}
          source={recipe.sourceUrl}
        />
      </div>
    ))
  ) : (
    <p className="Error-message">OOPS! We did not find any recipes that includes your searched term! Please try a different search term! </p>
  )}
</div>

<Footer />
    </div>
  );
}

export default App;
