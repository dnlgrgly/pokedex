import React from "react";
import { view } from "react-easy-state";
import pokedex from "../store";
import Attack from "./Attack";
import Type from "./Type";
import Evolution from "./Evolution";

/*          
            attacks {
              fast {
                name
                type
                damage
              }
              special {
                name
                type
                damage
              }
            }
*/

export default view(() => {
  if (!pokedex.selectedPokemon) return null;

  const {
    image,
    name,
    weight,
    height,
    types,
    classification,
    resistant,
    weaknesses,
    maxCP,
    maxHP,
    fleeRate,
    evolutions,
    evolutionRequirements,
    attacks
  } = pokedex.selectedPokemon;

  console.log(evolutionRequirements);

  return (
    <div className="modal-container">
      <div className="modal-content">
        {pokedex.selectedPokemon && (
          <>
            <img src={image} />
            <div className="modal-center">
              <h2>{name}</h2>
              <p>{`max. ${maxCP} CP | max. ${maxHP} HP`}</p>
              <div className="type-container">
                {types.map(type => (
                  <Type type={type} />
                ))}
              </div>
            </div>
            <div className="modal-table-container">
              <div className="modal-table">
                <h3>Basic properties</h3>
                <p>
                  <b>Classification: </b>
                  {`${classification}`}
                </p>
                <p>
                  <b>Weight: </b>
                  {`${weight.minimum} - ${weight.maximum}`}
                </p>
                <p>
                  <b>Height: </b>
                  {`${height.minimum} - ${height.maximum}`}
                </p>
                <p>
                  <b>Flee rate: </b>
                  {`${fleeRate}`}
                </p>

                <div className="modal-type-container">
                  <b>Resistancy: </b>
                  <div className="type-container">
                    {resistant.map(type => (
                      <Type type={type} />
                    ))}
                  </div>
                </div>

                <div className="modal-type-container">
                  <b>Weaknesses: </b>
                  <div className="type-container">
                    {weaknesses.map(type => (
                      <Type type={type} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-table">
                <h3>Evolution</h3>
                {evolutions && (
                  <div className="evolution-container">
                    {evolutions.map(item => (
                      <Evolution evolution={item} />
                    ))}
                  </div>
                )}
                {evolutionRequirements && (
                  <p>
                    <b>Evolution requirements: </b>
                    {evolutionRequirements.amount} {evolutionRequirements.name}
                  </p>
                )}
                <h3>Attacks</h3>
                <p>Fast</p>
                {attacks.fast.map(attack => (
                  <Attack attack={attack} />
                ))}
                <p>Special</p>
                {attacks.special.map(attack => (
                  <Attack attack={attack} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
