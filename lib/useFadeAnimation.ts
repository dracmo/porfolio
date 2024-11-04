import { useMemo } from "react";

function useFadeAnimation(theme: string | undefined) {
  const enterClass = "animate-fade-in-from-left";
  const exitClass = "animate-fade-out-to-right";

  const sunnyAnimation = useMemo(
    () => (theme === "light" ? enterClass : exitClass),
    [theme]
  );

  const nightAnimation = useMemo(
    () => (theme === "dark" ? enterClass : exitClass),
    [theme]
  );

  return { sunnyAnimation, nightAnimation };
}

export default useFadeAnimation;
