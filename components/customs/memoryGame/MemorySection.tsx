"use client";
import clsx from "clsx";
import { MemoryBoard } from "./MemoryBoard";
import { MemoryContextProvider, useMemoryContext } from "./MemoryProvidert";
import { Button } from "@/components/ui/button";
import { Typography } from "../Typography";
import { ReactElement } from "react";

export const MemorySection = ({ className }: { className?: ReactElement }) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col items-center gap-12 w-fit m-auto sm:px-8 px-4 py-5 mb-20",
        "MovingBG bg-gradient-to-br from-secondary-foreground/90 via-background/90 to-secondary/90 rounded-3xl "
      )}
      title="You're boring ? Let's play a game !"
    >
      {/* Memory Game - Exercise */}
      <MemoryContextProvider>
        <div className="flex flex-col items-center sm:gap-14 gap-8">
          <div className="flex flex-col items-center gap-2">
            <TryCountText />
            <MemoryBoard />
            <ResetButton />
          </div>
        </div>
      </MemoryContextProvider>
    </div>
  );
};
const TryCountText = () => {
  // Display the try count or a message when the game is finished
  const { tryCount, isFinish } = useMemoryContext();
  if (isFinish) {
    return <Typography>well done you have finish the game</Typography>;
  }
  return <Typography>You have tried {tryCount} times</Typography>;
};

const ResetButton = () => {
  // Reset the game to initial state
  const { reset } = useMemoryContext();
  return (
    <Button className="rounded-xl bg-secondary-foreground" onClick={reset}>
      Reset
    </Button>
  );
};
