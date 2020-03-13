import React from "react";
import { view } from "react-easy-state";

export default view(evolution => {
  console.log("Evolution ITEM IN VIEW");
  console.log(evolution);
  console.log(evolution.id);
  console.log(evolution.image);
  console.log(evolution.name);

  return (
    <div className="evolution">
      <img src={evolution.image} />
      <h4>{evolution.name}</h4>
    </div>
  );
});
