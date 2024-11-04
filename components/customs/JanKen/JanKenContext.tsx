import React, { createContext, useState, ReactNode } from "react";
import { JanKenGameContextType, Choice } from "./type";

export const JanKenGameContext = createContext<JanKenGameContextType>({
  playerScore: 0,
  computerScore: 0,
  round: 1,
  result: "",
  getComputerChoice: () => "Rock",
  determineWinner: () => {},
  resetGame: () => {},
  choices: ["Rock", "Paper", "Scissors"],
});

export const JanKenGameProvider = ({ children }: { children: ReactNode }) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [result, setResult] = useState("");

  const choices: Choice[] = ["Rock", "Paper", "Scissors"];

  const getComputerChoice = (): Choice => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (playerChoice: Choice, computerChoice: Choice) => {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setPlayerScore((prev) => prev + 1);
      setResult("You win this round!");
    } else {
      setComputerScore((prev) => prev + 1);
      setResult("Computer wins this round!");
    }
    setRound((prev) => prev + 1);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setResult("");
  };

  const value = {
    playerScore,
    computerScore,
    round,
    result,
    getComputerChoice,
    determineWinner,
    resetGame,
    choices,
  };

  return (
    <JanKenGameContext.Provider value={value}>
      <div className="text-text">{children}</div>
    </JanKenGameContext.Provider>
  );
};
