import axios from "axios";
import { filterAndSort } from "../utilities";
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_FAIL = "FETCH_POKEMON_FAIL";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_RESULTS_PER_PAGE = "SET_RESULTS_PER_PAGE";

export const fetchPokemon = (currentPage, resultsPerPage) => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_START });
  const fetchData = async () => {
    try {
      const listResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${resultsPerPage}&offset=${(currentPage - 1) * resultsPerPage}`
      );
      const list = [];
      const { results } = listResponse.data;

      for (const pokemon of results) {
        const pokemonResponse = await axios.get(pokemon.url);
        list.push(pokemonResponse.data);
      }
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: { list: filterAndSort(list), error: null } });
    } catch (error) {
      dispatch({ type: FETCH_POKEMON_FAIL, payload: { list: [], error: error } });
    }
  };
  fetchData();
};

export const setCurrentPage = (p) => {
  return { type: SET_CURRENT_PAGE, payload: p };
};

export const setResultsPerPage = (r) => {
  return { type: SET_RESULTS_PER_PAGE, payload: r };
};
