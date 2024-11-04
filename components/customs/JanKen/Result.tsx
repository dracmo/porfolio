// Result.js
import React, { useContext } from "react";
import { JanKenGameContext } from "./JanKenContext";

// Component to display the result of each round
const Result = () => {
  const { result, playerScore, computerScore } = useContext(JanKenGameContext);

  // Determine overall winner when score reaches 3
  const overallWinner =
    playerScore === 3
      ? "Player wins the game!"
      : computerScore === 3
      ? "Computer wins the game!"
      : "";

  return (
    <div>
      <h4>{result}</h4>
      {overallWinner && <h2>{overallWinner}</h2>}
    </div>
  );
};

export default Result;
