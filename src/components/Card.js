import React from "react";
import { view } from "react-easy-state";
import Type from "./Type";

export default view(({ name, image, classification, types }) => (
  <div className="pokemon-card">
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
