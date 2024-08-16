import './Card.css';

export default function Card({pokemon, handleCardClick}) {
  return(
    <div className="card" onClick={() => handleCardClick(pokemon.name)}>
      <h1>{formatName(pokemon.name)}</h1>
      <div className="card-image">
        <img src={pokemon.imageUrl} alt="" />
      </div>
      <ul>
        {pokemon.moves.map(move => <li key={move}>{move}</li>)}
      </ul>
    </div>
  )
}

function formatName(name) {
  return name.slice(0,1).toUpperCase() + name.slice(1);
}