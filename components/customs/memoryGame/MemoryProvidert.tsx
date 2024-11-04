"use client";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactElement,
} from "react";

import {
  CARD_STATE,
  getInitialMemory,
  isMemoryFinished,
  isPairCards,
} from "./memory";
import { Card, MemoryContextType } from "./type";

const MemoryContext = createContext<MemoryContextType>({
  cards: [],
  tryCount: 0,
  onReturnCard: () => {},
  reset: () => {},
  isFinish: false,
});

export const MemoryContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [cards, setCards] = useState<Card[]>([]); // Initialize with empty array

  const [tryCount, setTryCount] = useState(0);
  const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);

  // Shuffle cards on the client side
  useEffect(() => {
    const initialCards = getInitialMemory();
    setCards(initialCards);
  }, []);

  const onReturnCard = (returnedCard: Card) => {
    if (returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }
    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);
    if (returnedCards.length === 2 || returnedCards.includes(returnedCard)) {
      return;
    }
    setCards((current) =>
      current.map((card) => {
        if (card.id === returnedCard.id) {
          card.state = CARD_STATE.RETURNED;
        }
        return card;
      })
    );

    if (returnedCards.length === 0) {
      return;
    }
    returnedCards.push(returnedCard);
    computerReturnedCards(returnedCards);
  };

  type ReturnedCards = Card[];

  const computerReturnedCards = (returnedCards: ReturnedCards): void => {
    setTryCount((current) => current + 1);
    const isPair = isPairCards({
      card1: returnedCards[0],
      card2: returnedCards[1],
    });

    setTimeout(
      () => {
        setCards((current) => {
          return current.map((card) => {
            if (
              card.state === CARD_STATE.RETURNED &&
              returnedCards.includes(card)
            ) {
              card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
            }
            return card;
          });
        });
      },
      isPair ? 300 : 1000
    );
  };

  const reset = () => {
    const initialCards = getInitialMemory();
    setCards(initialCards);
    setTryCount(0);
  };

  const values = { cards, tryCount, onReturnCard, reset, isFinish };

  return (
    <MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>
  );
};

// Custom hook to use the MemoryContext
export const useMemoryContext = () => {
  const context = useContext(MemoryContext);
  if (!context) {
    throw new Error(
      "useMemoryContext must be used within a MemoryContextProvider"
    );
  }
  return context;
};
