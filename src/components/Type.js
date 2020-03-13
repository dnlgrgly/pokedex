import React from "react";

export const Type = type => {
  console.log("TYPE IT IS.");
  console.log(type);
  return (
    <div className={`type type-${type.type.toLowerCase()}`}>
      <p>{type.type}</p>
    </div>
  );
};

export default Type;
