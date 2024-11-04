"use client";

import { useTheme } from "next-themes";
import { WavyBackground } from "../../../components/ui/wavy-background";
import { ReactNode } from "react";

export const WaveBackground = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#1b0132" : "#e5e3ff";

  return (
    <div>
      {/* Wave Background */}
      <WavyBackground
        backgroundFill={color}
        className="flex flex-col px-2 md:px-10 py-4 w-full min-h-screen h-full overflow-auto "
        speed="slow"
        blur={5}
        waveHeight={150}
      >
        {children}
      </WavyBackground>
    </div>
  );
};
