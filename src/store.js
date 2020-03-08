import { store } from "react-easy-state";
import * as api from "./api";

const pokedex = store({
  isLoading: true,
  pokemons: [],
  async fetch() {
    pokedex.isLoading = true;
    pokedex.pokemons = await api.fetch();
    pokedex.isLoading = false;
  }
});

export default pokedex;
