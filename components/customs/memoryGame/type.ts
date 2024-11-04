export type Card = {
  id: string;
  emoji: string;
  state: string;
};
export interface MemoryContextType {
  cards: { id: string; emoji: string; state: string }[];
  tryCount: number;
  onReturnCard: (returnedCard: Card) => void;
  reset: () => void;
  isFinish: boolean;
}
