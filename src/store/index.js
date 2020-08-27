import { createStore, applyMiddleware } from "redux";
import { pokemonReducer } from "../reducers/pokemonReducer";
import thunk from "redux-thunk";

export default createStore(pokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)));
