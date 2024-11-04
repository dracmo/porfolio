// Scoreboard.js
import React, { useContext } from "react";
import { JanKenGameContext } from "./JanKenContext";
import { Typography } from "../Typography";

// Scoreboard component to display scores of player and computer
const Scoreboard = () => {
  // Component to display the current scores for both player and computer
  // It uses the JanKenGameContext to access the current scores
  const { playerScore, computerScore } = useContext(JanKenGameContext);

  return (
    <div className="flex justify-between gap-10 py-5">
      <Typography variant="h2">Player Score: {playerScore}</Typography>
      <Typography variant="h2">Computer Score: {computerScore}</Typography>
    </div>
  );
};

export default Scoreboard;
