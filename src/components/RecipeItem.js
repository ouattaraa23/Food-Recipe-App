import React from "react";
import "./RecipeItem.css";

import Card from "./UI/Card";

let vId = "";

function RecipeItem(data) {
  if (data.recipe) {
    const url = data.recipe.strYoutube;
    const str = url.split("=");
    vId = str[str.length-1];
  }
  return (
    <Card className="recipe-item">
      <div className="recipe-item__heading">
        <h2>{data.recipe.strMeal}</h2>
        <img src={data.recipe.strMealThumb} alt="" width={350} height={350} />
      </div>
      <div className="card">
        <div className="recipe-item__description">
          <div>
            <h4>Instructions:</h4>
            <h4>{data.recipe.strInstructions}</h4>
            <h4>Youtube Tutorial:</h4>
            <iframe className="video" title={vId} src={`https://www.youtube.com/embed/${vId}`}></iframe>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default RecipeItem;
