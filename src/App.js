import React, { useEffect } from "react";
import styled from "styled-components";
import Pokemon from "./components/Pokemon";
import { connect } from "react-redux";
import { setCurrentPage, setResultsPerPage, fetchPokemon } from "./actions";
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

function App({ loading, resultsPerPage, currentPage, pokemonList, setCurrentPage, setResultsPerPage, fetchPokemon }) {
  useEffect(() => {
    fetchPokemon(currentPage, resultsPerPage);
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

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  resultsPerPage: state.resultsPerPage,
  pokemonList: state.pokemonList,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (p) => dispatch(setCurrentPage(p)),
    setResultsPerPage: (r) => dispatch(setResultsPerPage(r)),
    fetchPokemon: (c, r) => dispatch(fetchPokemon(c, r)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
