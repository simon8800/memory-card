export default function Scores({bestScore, currentScore}) {
  if (currentScore === 12) {
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