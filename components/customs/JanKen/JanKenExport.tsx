import React from "react";
import clsx from "clsx";
import { JanKenGameProvider } from "./JanKenContext";
import { JanKenGame } from "./JanKenGame";
import Scoreboard from "./Scoreboard";

interface JanKenExportProps {
  className?: string;
}

export const JanKenExport: React.FC<JanKenExportProps> = ({ className }) => {
  // Main component that wraps the entire Jan Ken game
  // It provides the game context and renders the Scoreboard and JanKenGame components
  // The className prop allows for custom styling from the parent component
  return (
    <div
      className={clsx(
        className,
        "flex flex-col items-center gap-12 w-fit m-auto sm:px-8 px-4 py-5 ",
        "MovingBG bg-gradient-to-br from-secondary-foreground/90 via-background/90 to-secondary/90 rounded-3xl "
      )}
    >
      <JanKenGameProvider>
        <Scoreboard />
        <JanKenGame />
      </JanKenGameProvider>
    </div>
  );
};
