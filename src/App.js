import React, { useEffect } from "react";
import styled from "styled-components";
import Pokemon from "./components/Pokemon";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage as SetCurrentPage,
  setResultsPerPage as SetResultsPerPage,
  fetchPokemon as FetchPokemon,
} from "./actions";
import "./App.css";

const PokemonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80rem;
  margin: auto;
`;

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const pokemonList = useSelector((state) => state.pokemonList);
  const currentPage = useSelector((state) => state.currentPage);
  const resultsPerPage = useSelector((state) => state.resultsPerPage);
  const setCurrentPage = (c) => dispatch(SetCurrentPage(c));
  const setResultsPerPage = (r) => dispatch(SetResultsPerPage(r));
  const fetchPokemon = () => dispatch(FetchPokemon(currentPage, resultsPerPage));

  useEffect(() => {
    fetchPokemon();
  }, [currentPage, resultsPerPage]);
  return (
    <div className="App">
      <h1 className="Header">Pokemon{loading ? " Loading..." : null}</h1>
      <div className="info">
        Showing Pokemon #{(currentPage - 1) * resultsPerPage} - #{(currentPage - 1) * resultsPerPage + resultsPerPage}
      </div>
      <div className="info">
        Pokemon Per Page:{" "}
        <select onChange={(e) => setResultsPerPage(Number(e.target.value))}>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9" selected>
            9
          </option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
      </div>
      {loading ? (
        "Loading"
      ) : (
        <PokemonList>
          {pokemonList.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </PokemonList>
      )}
      <button disabled={loading} onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 0)}>
        Previous
      </button>
      <button disabled={loading} onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default App;
