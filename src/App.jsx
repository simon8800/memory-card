import { useState, useEffect } from 'react'
import { fetchPokemonData } from './utils/pokemonService';
import Board from './components/Board';
import Scores from './components/Scores';
import './App.css'


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  let pokemonAmount = pokemon.length;

  const handleCardClick = (pokemonName) => {
    let newPokemonOrder = randomPlacement(pokemon);
    setPokemon(newPokemonOrder);
    if (!selectedPokemon.includes(pokemonName)) {
      setSelectedPokemon([...selectedPokemon, pokemonName]);
      setCurrentScore(currentScore + 1)
      if (bestScore <= currentScore) setBestScore(currentScore + 1);
    } else {
      if (currentScore === pokemonAmount) {
        setSelectedPokemon([pokemonName])
        setCurrentScore(1);
        return;
      }
      startOver();
    }
  }

  function startOver() {
    setCurrentScore(0);
    setSelectedPokemon([]);
  }

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        let newPokemonData = await fetchPokemonData();
        setPokemon(newPokemonData);
      } catch (error) {
        console.log('Failed to fetch Pokemon data: ', error);
      }
    }

    getPokemonData();
  }, [])

  return (
    <>
      <Scores pokemonAmount={pokemonAmount} currentScore={currentScore} bestScore={bestScore}/>
      {pokemon.length > 0 ? <Board 
        pokemonList={pokemon}
        handleCardClick={handleCardClick}
      /> :
      <h1>Loading Pokemon</h1>
      }
      
    </>
  )
}

function randomPlacement(pokemonList) {
  let randomList = [];
  let numbers = [];
  let maxNum = pokemonList.length;
  let iteration = 0;

  if (pokemonList.length === 0) {
    return randomList;
  }

  while (numbers.length !== maxNum || iteration < 10000) {
    let randomIndex = Math.floor(Math.random() * maxNum);
    if (!numbers.includes(randomIndex)) {
      randomList.push(pokemonList[randomIndex])
      numbers.push(randomIndex)
    }
    iteration++;
  }

  return randomList;
}

export default App
