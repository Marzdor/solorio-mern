import React from "react";
import beer from "../data/menu.json";

const beerElements = [];
for (let key in beer) {
  beerElements.push(
    <div className="menu-container-beer" key={key}>
      <h2 className="menu-title">{beer[key].name}</h2>
      <h3 className="menu-title-sub">Style</h3>
      <p className="menu-text">{beer[key].style}</p>
      <h3 className="menu-title-sub">ABV</h3>
      <p className="menu-text">{beer[key].abv}%</p>

      <img
        className="menu-image"
        src="https://via.placeholder.com/175x150"
        alt={"Image of " + beer[key].name + " beer."}
      />
    </div>
  );
}

const Menu = props => {
  return <section className="menu-container">{beerElements}</section>;
};

export default Menu;
