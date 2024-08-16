import Card from "./Card";
import './Board.css';

export default function Board({pokemonData, handleCardClick}) {
  return (
    <div className="board">
      {pokemonData.map(pokemon => {
        return <Card key={pokemon.name} pokemon={pokemon} handleCardClick={handleCardClick}/>
      })}
    </div>
  )
}