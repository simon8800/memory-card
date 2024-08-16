const pokeApiUrl = "https://pokeapi.co/api/v2/";

export async function fetchPokemonData() {
  let newPokemons = [];
  let pokemonIds = generatePokemonIds();
  for (let id of pokemonIds) {
    let response = await fetch(pokeApiUrl + `pokemon/${id}`);
    let data = await response.json();
    let newPokemon = {
      name: data.species.name,
      imageUrl: data.sprites.other["official-artwork"].front_default,
      moves: data.moves.slice(0, 4).map((moveInfo) => moveInfo.move.name),
    };
    newPokemons.push(newPokemon);
  }
  return newPokemons;
}

function generatePokemonIds() {
  let ids = [];
  while (ids.length < 12) {
    let newId = Math.floor(Math.random() * 1025) + 1;
    if (!ids.includes(newId)) {
      ids.push(newId);
    }
  }
  return ids;
}
