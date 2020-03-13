import React from "react";
import { view } from "react-easy-state";
import Type from "./Type";
import pokedex from "../store";

export default view(({ id, name, image, classification, types }) => (
  <div className="pokemon-card" onClick={() => {
    pokedex.fetchPokemon(id);
    pokedex.toggleModal();
  }}>
    <img src={image} />
    <h2>{name}</h2>
    <p className="classification">{classification}</p>
    <div className="type-container">
      {types.map(type => (
        <Type type={type} />
      ))}
    </div>
  </div>
));
