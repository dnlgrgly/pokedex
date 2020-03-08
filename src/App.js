import React from "react";
import { view } from "react-easy-state";
import pokedex from "./store";
import List from "./components/List";
import "./App.css";

export default view(() => {
  if (pokedex.isLoading) {
    pokedex.fetch();
  }

  return (
    <div>
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"/>
        <p>
          A demo Pokédex app built with GraphQL and{" "}
          <a href="https://github.com/risingstack/react-easy-state">
            react-easy-state
          </a>
          .
        </p>
      </div>
      <div className="content-body">
        {pokedex.isLoading ? <p>Loading...</p> : <List />}
      </div>
    </div>
  );
});
