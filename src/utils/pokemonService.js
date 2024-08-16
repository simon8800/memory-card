const pokeApiUrl = "https://pokeapi.co/api/v2/";

export async function fetchPokemonData(pokemonList) {
  let newPokemons = [];
  for (let monster of pokemonList) {
    let response = await fetch(pokeApiUrl + `pokemon/${monster.name}`);
    let data = await response.json();
    let newPokemon = {
      name: data.species.name,
      imageUrl: data.sprites.other.dream_world.front_default,
      moves: data.moves.slice(0, 4).map((moveInfo) => moveInfo.move.name),
    };
    newPokemons.push(newPokemon);
  }
  return newPokemons;
}
