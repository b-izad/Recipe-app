import './App.css';
import React, {useEffect, useState} from "react";

function App() {
const APP_ID= 'b6c0ce0b'
const APP_KEY= 'b55444e88ae3adfaafc67fb9bfc6549f'
const example_req = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

const [recipe, setRecipe] = useState([]);
useEffect(()=>{
  getR()
} , []);

const getR = async () => {
  try{
  const res = await fetch (example_req)
  const data = await res.json()
  setRecipe(data.meals)}
  catch(error){console.log(error)}
}
  return (
    <div className="App">
     Hello world
    <form className="search">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        
        </button>

      
    </form>
    </div>
  );
}

export default App;
