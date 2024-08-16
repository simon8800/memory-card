import './Card.css';

export default function Card({pokemon, handleCardClick}) {
  return(
    <div className="card" onClick={() => handleCardClick(pokemon.name)}>
      <h1>{pokemon.name}</h1>
      <div className="card-image">
        <img src={pokemon.imageUrl} alt="" />
      </div>
      <ul>
        {pokemon.moves.map(move => <li key={move}>{move}</li>)}
      </ul>
    </div>
  )
}