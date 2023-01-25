import React from "react";

import RecipeItem from "./RecipeItem";
import "./RecipeItemList.css";

function RecipeItemList(props) {
  console.log(props.data);

  if (props.data.length === 0) {
    return <h2>Not Found</h2>;
  }

  return (
    <ul className="recipe-item-list">
      {props.data.map((item) => (
        <RecipeItem
          recipe={item}
        />
      ))}
    </ul>
  );
}

export default RecipeItemList;
