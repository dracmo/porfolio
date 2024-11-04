export interface JanKenGameContextType {
  playerScore: number;
  computerScore: number;
  round: number;
  result: string;
  getComputerChoice: () => Choice;
  determineWinner: (playerChoice: Choice, computerChoice: Choice) => void;
  resetGame: () => void;
  choices: Choice[];
}
export type Choice = "Rock" | "Paper" | "Scissors";
