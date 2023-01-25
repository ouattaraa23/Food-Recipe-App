import React, { useEffect, useState } from "react";
import "./MainRecipe.css";
import RecipeIndex from "./RecipeIndex";
import RecipeItemList from "./RecipeItemList";

function MainRecipe() {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.meals);
      });
  }, [url]);

  const setIndex = (lex) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lex}`);
  }

  const searchRecipe = (event) => {
    if (event.key==="Enter") {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  }

  return (
    <div>
      <div className="main-recipe">
        <div className="Heading">
          <h1>Search For A Recipe!</h1>
          <h4>
            Welcome to my project, My goal is to make a database for recipes so
            that I do not have to rely on google all the time.
          </h4>
        </div>
        <div className="search">
          <input type="text" 
          className="search-bar" 
          onChange = {el => setSearch(el.target.value)}
          onKeyPress = {searchRecipe}/>
        </div>
      </div>
      <div className="container">
        <RecipeItemList data={items}/>
      </div>
      <div className="container-index">
        <RecipeIndex lexIndex={(lex) => setIndex(lex)}/>
      </div>
    </div>
  );
}

export default MainRecipe;
