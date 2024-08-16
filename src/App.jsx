import { useState, useEffect } from 'react'
import pokemon from './utils/pokemon';
import { fetchPokemonData } from './utils/pokemonService';
import Board from './components/Board';
import Scores from './components/Scores';
import './App.css'


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const pokemonAmount = pokemonData.length;

  function handleCardClick(pokemonName) {
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
        let newPokemonData = await fetchPokemonData(pokemon);
        setPokemonData(newPokemonData);
      } catch (error) {
        console.log('Failed to fetch Pokemon data: ', error);
      }
    }

    getPokemonData();
  }, [])

  return (
    <>
      <Scores pokemonAmount={pokemonAmount} currentScore={currentScore} bestScore={bestScore}/>
      <Board 
        pokemonData={pokemonData}
        handleCardClick={handleCardClick}
      />
    </>
  )
}

export default App
