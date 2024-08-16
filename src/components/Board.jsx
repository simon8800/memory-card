import Card from "./Card";
import './Board.css';

export default function Board({pokemonList, handleCardClick}) {

  return (
    <div className="board">
      {pokemonList.map(pokemon => {
        return <Card key={pokemon.name} pokemon={pokemon} handleCardClick={handleCardClick}/>
      })}
    </div>
  )
}