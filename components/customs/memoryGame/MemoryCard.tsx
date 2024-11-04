"use client";
import clsx from "clsx";
import styles from "./MemoryCard.module.css";
import { CARD_STATE } from "./memory";
import { useTheme } from "next-themes";

import { MouseEventHandler } from "react";
import { Card } from "./type";

export const MemoryCard = ({
  children,
  card,
  onClick,
}: {
  children: React.ReactNode;
  card: Card;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  // Check if the card is returned or found
  const isReturned =
    card.state === CARD_STATE.RETURNED || card.state === CARD_STATE.FIND;

  return (
    <div className="relative" onClick={onClick}>
      <button
        className={clsx(
          styles.transition,
          "rounded-xl border-0 sm:border-4 border-primary bg-primary-foreground sm:p-0.5 sm:w-20 sm:h-20 sm:text-5xl text-3xl p-0  justify-center items-center flex",
          {
            [clsx("!bg-red-400", styles.rotate)]: !isReturned,
            [clsx("!bg-green-400", styles.bounce)]:
              card.state === CARD_STATE.FIND,
          }
        )}
      >
        {/* Display the card content based on its state */}
        <span className="block rounded bg-paper p-3">{children}</span>
      </button>
      <button
        style={{ backfaceVisibility: "hidden" }}
        className={clsx(
          styles.transition,
          "absolute inset-0 flex rounded-xl border-2 sm:border-4 border-primary-foreground bg-primary p-3 justify-center items-center",
          {
            [styles.rotate]: isReturned,
          }
        )}
      >
        {/* Display the question emoji */}
        {<QuestionEmoji />}
      </button>
    </div>
  );
};
const QuestionEmoji = () => {
  const { theme } = useTheme();
  return theme === "light" ? "❓" : "❔";
};
