import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./slice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getSate) => {
    dispatch(startLoadingPokemons());
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ page: page + 1, pokemons: data.results }));
  };
};
