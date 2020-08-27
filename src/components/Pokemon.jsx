import React from "react";
import styled from "styled-components";
import { firstLetterUpperCase } from "../utilities";
import EggMoves from "./EggMoves";

const PokemonCard = styled.div`
  align-self: stretch;
  color: white;
  width: 22rem;
  background-color: darkslategray;
  border-radius: 1rem;
  border: 1px solid black;
  margin: 1rem;
  div.img-card {
    background-color: white;
    padding: 0;
    margin: 0;
    border-radius: 1rem 1rem 0 0;
  }
  .type,
  .abilities,
  .eggMove {
    margin: 0.5rem;
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    padding: 0.3rem;
    width: 90%;
    margin: 0.5rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default function Pokemon(props) {
  const { name, id, abilities, eggMoves, sprites, types } = props.pokemon;
  return (
    <PokemonCard>
      <div className="img-card">
        <img src={sprites["front_default"]} alt="Front Default" />
      </div>
      <h3>
        {firstLetterUpperCase(name)} - #({id})
      </h3>
      <p>
        Types:
        {types.map((type, i) => (
          <span key={i} className="type">
            {firstLetterUpperCase(type.type.name)}
          </span>
        ))}
      </p>
      <p>
        Abilities:
        {abilities.map((ability, i) => (
          <span key={i} className="abilities">
            {firstLetterUpperCase(ability.ability.name)}
          </span>
        ))}
      </p>
      <EggMoves moves={eggMoves} />
    </PokemonCard>
  );
}
