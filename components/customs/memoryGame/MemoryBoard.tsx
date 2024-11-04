import { MemoryCard } from "./MemoryCard";
import { useMemoryContext } from "./MemoryProvidert";

export const MemoryBoard = () => {
  // Memory Game - Exercise
  const { cards, onReturnCard } = useMemoryContext();

  if (!cards) {
    return <p className="text-red-500">An error occurs, there is no board.</p>;
  }

  return (
    <div className="grid w-max sm:grid-cols-6 grid-cols-5 grid-rows-6 gap-1">
      {/* Render each card in the board */}
      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          onClick={() => onReturnCard(card)}
          card={card}
        >
          {card.emoji}
        </MemoryCard>
      ))}
    </div>
  );
};
