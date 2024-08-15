# Memory Card Game

User is given 12 cards and has to click each one once successively to win. If user clicks on a card they have already clicked on previously, the score resets.

## Thoughts

- Get data from [PokeAPI](https://pokeapi.co/) to create Pokemon cards with some basic info
- Get 12 different Pokemon images
- Components to make:
  - Card which displays Pokemon image and Pokemon information
    - Name
    - Image
    - Up to 4 abilities
- States to track:
  - `bestScore`: Number -- tracks player's best score
  - `currentScore`: Number -- trackers player's current score, if it hits 12 then player wins
  - `unselectedPokemon`: Array -- tracks pokemon havent selected yet
    - `selectedPokemon`: Array -- tracks pokemon that were selected already -- derive from unselectedPokemon?
- `useEffect` hook to get pokemon data when App component loads