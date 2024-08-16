export default function Scores({bestScore, currentScore, pokemonAmount}) {
  if (currentScore === pokemonAmount && pokemonAmount > 0) {
    return <Winner/>
  }

  return(
    <div className="scores">
      <p><em>Objective: Click every Pokemon only once</em></p>
      <p><strong>Best Score: {bestScore}</strong></p>
      <p><strong>Current Score: {currentScore}</strong></p>
    </div>
  )
}

function Winner() {
  return (
    <div className="winner">
      <h1>You Win!</h1>
      <p>Click a card to start a new game</p>
    </div>
  )
}