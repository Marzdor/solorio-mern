import React from "react";

const Beer = props => {
  const beerElements = [];

  for (let key in props.beer) {
    if (props.edit) {
      beerElements.push(
        <div className="edit-item" key={key}>
          <h2 className="edit-name">{props.beer[key].name}</h2>
          <button
            onClick={props.handleClick}
            className="edit-btn edit-btn--edit"
          >
            Edit
          </button>
          <button
            onClick={props.handleClick}
            className="edit-btn edit-btn--delete"
          >
            Delete
          </button>
        </div>
      );
    } else {
      beerElements.push(
        <div className="menu-container-beer" key={key}>
          <h2 className="menu-title">{props.beer[key].name}</h2>
          <h3 className="menu-title-sub">Style</h3>
          <p className="menu-text">{props.beer[key].style}</p>
          <h3 className="menu-title-sub">ABV</h3>
          <p className="menu-text">{props.beer[key].abv}%</p>

          <div className="menu-image">
            <img
              src="https://via.placeholder.com/175x150"
              alt={"Image of " + props.beer[key].name + " beer."}
            />
            <p className="menu-text">{props.beer[key].desc}</p>
          </div>
        </div>
      );
    }
  }
  return (
    <section className={!props.edit ? "menu-container" : "edit"}>
      {props.edit && (
        <div className="edit-item edit-item--create">
          <h2 className="edit-name">New Beer</h2>
          <button
            onClick={props.handleClick}
            className="edit-btn edit-btn--create"
          >
            Create
          </button>
        </div>
      )}
      {beerElements}
    </section>
  );
};

export default Beer;
