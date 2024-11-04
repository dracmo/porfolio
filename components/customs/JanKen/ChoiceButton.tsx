import React from "react";
import Image from "next/image";
type Choice = "Rock" | "Paper" | "Scissors";

interface ChoiceButtonProps {
  choice: Choice;
  onClick?: (choice: string) => void;
  disabled?: boolean;
}

const ChoiceButton = ({ choice, onClick, disabled }: ChoiceButtonProps) => {
  // Component to render a button for each game choice (Rock, Paper, Scissors)
  // It displays an image corresponding to the choice
  // The onClick prop is a function to handle the player's selection

  const choiceImages = {
    Rock: "/image/games/rock.png",
    Paper: "/image/games/paper.png",
    Scissors: "/image/games/scissors.png",
  };

  return (
    <button onClick={() => onClick && onClick(choice)} disabled={disabled}>
      <Image
        src={choiceImages[choice]}
        alt={choice}
        width={128}
        height={128}
        className="w-20 sm:w-32 h-20 sm:h-32"
      />
    </button>
  );
};

export default ChoiceButton;
