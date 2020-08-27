import React, { useState } from "react";
import styled from "styled-components";
import { firstLetterUpperCase } from "../utilities";

const EggMovesStyled = styled.div`
  .eggMove .item {
    ${(props) => (props.expanded ? "display: block !important;" : "display: none !important;")}
  }
`;

export default function EggMoves(props) {
  const [expanded, setExpanded] = useState(props.moves.length > 5 ? false : true);
  return (
    <EggMovesStyled onClick={() => setExpanded(!expanded)} expanded={expanded}>
      Egg Moves:
      {props.moves.length === 0 ? (
        <span className="eggMove">None</span>
      ) : expanded ? (
        props.moves.map((move, i) => (
          <span key={i} className="eggMove item">
            {firstLetterUpperCase(move.move.name)}
          </span>
        ))
      ) : (
        <span className="eggMove">Expand ({props.moves.length})</span>
      )}
    </EggMovesStyled>
  );
}
