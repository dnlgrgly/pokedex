import { store } from "react-easy-state";
import * as api from "./api";

const pokedex = store({
  isModalOpen: false,
  isLoading: true,
  pokemons: [],
  selectedPokemon: null,
  async fetchList() {
    pokedex.isLoading = true;
    pokedex.pokemons = await api.fetchList();
    pokedex.isLoading = false;
  },
  async fetchPokemon(id) {
    pokedex.selectedPokemon = await api.fetchPokemon(id);
  },
  toggleModal() {
    pokedex.isModalOpen = !pokedex.isModalOpen;
  }
});

export default pokedex;
