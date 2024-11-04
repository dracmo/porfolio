// Game.js
import React, { useContext, useEffect, useState } from "react";
import { JanKenGameContext } from "./JanKenContext";
import ChoiceButton from "./ChoiceButton";
import { Typography } from "../Typography";
import { Choice } from "./type";

// Main Game component
export const JanKenGame = () => {
  // Main component for the Jan Ken game
  // Manages game state, player choices, and game flow

  const {
    round,
    playerScore,
    computerScore,
    getComputerChoice,
    determineWinner,
    resetGame,
    result,
  } = useContext(JanKenGameContext);

  const [playerChoice, setPlayerChoice] = useState<null | Choice>(null);
  const [computerChoice, setComputerChoice] = useState<null | Choice>(null);
  const [showResult, setShowResult] = useState(false);

  // Function to handle player's choice
  const handlePlayerChoice = (choice: Choice) => {
    // Sets player's choice, gets computer's choice
    // Triggers result display after a delay
    setPlayerChoice(choice);
    const compChoice = getComputerChoice();
    setComputerChoice(compChoice);

    setTimeout(() => {
      setShowResult(true);
      determineWinner(choice, compChoice);
    }, DELAY_BEFORE_RESULT);
  };

  // Effect to check if game ends (first to 3 wins)
  useEffect(() => {
    // Resets game if either player reaches 3 wins
    if (playerScore === 3 || computerScore === 3) {
      setTimeout(resetGame, 2000);
    }
  }, [playerScore, computerScore, resetGame]);

  // Effect to reset choices and hide result after a delay
  useEffect(() => {
    // Resets player and computer choices, hides result
    if (showResult) {
      setTimeout(() => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setShowResult(false);
      }, DELAY_BEFORE_RESET);
    }
  }, [showResult]);

  return (
    <div className="gap-10 m-auto w-full text-center flex flex-col items-center justify-center">
      <Typography variant="h2">Round: {round}</Typography>
      {!computerChoice && (
        <Typography variant="subTitle" className="h-[50px]">
          Try to beat me
        </Typography>
      )}
      <div className="flex gap-10">
        {!playerChoice ? (
          <div className="flex gap-10">
            <ChoiceButton
              choice="Rock"
              onClick={() => handlePlayerChoice("Rock")}
            />
            <ChoiceButton
              choice="Paper"
              onClick={() => handlePlayerChoice("Paper")}
            />
            <ChoiceButton
              choice="Scissors"
              onClick={() => handlePlayerChoice("Scissors")}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {computerChoice && (
              <div>
                <p>Computer:</p>
                <ChoiceButton choice={computerChoice} disabled />
              </div>
            )}
            <div>
              <p>You:</p>
              <ChoiceButton choice={playerChoice} disabled />
            </div>
          </div>
        )}
      </div>
      {showResult ? (
        <Typography variant="h2">{result}</Typography>
      ) : (
        <Typography variant="h2">Make your choice</Typography>
      )}
    </div>
  );
};

// Constantes pour les délais (en millisecondes)
const DELAY_BEFORE_RESULT = 500; // Délai avant d'afficher le résultat
const DELAY_BEFORE_RESET = 3000; // Délai avant de réinitialiser le jeu
