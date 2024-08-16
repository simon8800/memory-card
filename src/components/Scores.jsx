export default function Scores({bestScore, currentScore, pokemonAmount}) {
  if (currentScore === pokemonAmount) {
    return <Winner/>
  }

  return(
    <div className="scores">
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  )
}

function Winner() {
  return (
    <div className="winner">
      <h1>You Win!</h1>
    </div>
  )
}