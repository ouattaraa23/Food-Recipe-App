import React from "react";

import "./RecipeIndex.css";

function RecipeIndex({lexIndex}) {
  const lex = [
    {id: 0, value: "A"},
    {id: 1, value: "B"},
    {id: 2, value: "C"},
    {id: 3, value: "D"},
    {id: 4, value: "E"},
    {id: 5, value: "F"},
    {id: 6, value: "G"},
    {id: 7, value: "H"},
    {id: 8, value: "I"},
    {id: 9, value: "J"},
    {id: 10, value: "K"},
    {id: 11, value: "L"},
    {id: 12, value: "M"},
    {id: 13, value: "N"},
    {id: 14, value: "O"},
    {id: 15, value: "P"},
    {id: 16, value: "Q"},
    {id: 17, value: "R"},
    {id: 18, value: "S"},
    {id: 19, value: "T"},
    {id: 20, value: "U"},
    {id: 21, value: "V"},
    {id: 22, value: "W"},
    {id: 23, value: "W"},
    {id: 24, value: "Y"},
    {id: 25, value: "Z"},
  ];

  return (
    <div className="make-these-straight">
      {lex.map((item) => {
        return (<div className="lexBox" key={item.id} onClick = {() => lexIndex(item.value)}>
            <h3>{item.value}</h3>
        </div>
        )
      })}
    </div>
  );
}

export default RecipeIndex;
