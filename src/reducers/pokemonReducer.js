import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL,
  SET_CURRENT_PAGE,
  SET_RESULTS_PER_PAGE,
} from "../actions";
const initalState = {
  loading: false,
  pokemonList: [],
  resultsPerPage: 9,
  currentPage: 1,
  error: null,
};

export const pokemonReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POKEMON_START:
      return { ...state, loading: true };
    case FETCH_POKEMON_SUCCESS:
    case FETCH_POKEMON_FAIL:
      return { ...state, loading: false, error: payload.error ? state.error : null, pokemonList: payload.list };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case SET_RESULTS_PER_PAGE:
      return { ...state, resultsPerPage: payload };
    default:
      return state;
  }
};
