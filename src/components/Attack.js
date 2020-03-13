import React from "react";
import Type from "./Type";

export const Attack = attack => {
  console.log(attack);
  return (
    <div className="attack">
      <div>
        <b>{attack.name}</b>
        <p>Damage: {attack.damage}</p>
      </div>
      {/* <Type type={attack.type} /> */}
    </div>
  );
};

export default Attack;
