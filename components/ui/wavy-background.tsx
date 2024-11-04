import { cn } from "../../lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
interface WavyBackgroundProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  numberOfWaves?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "normal" | "fast";
  waveOpacity?: number;
  waveHeight?: number;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  numberOfWaves = 5,
  backgroundFill,
  blur = 10,
  speed = "slow",
  waveOpacity = 0.5,
  waveHeight = 100,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const waveColors = React.useMemo(
    () => colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    [colors]
  );

  const getSpeedFactor = React.useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.002;
      case "fast":
        return 0.005;
      default:
        return 0.0005;
    }
  }, [speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;
    let time = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    interface DrawWaveParams {
      n: number;
      ctx: CanvasRenderingContext2D;
      w: number;
      h: number;
      t: number;
    }

    const drawWave = (
      numberOfWaves: number,
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      time: number,
      { n, w, h, t }: DrawWaveParams
    ) => {
      const speedFactor = getSpeedFactor();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, t * speedFactor) * waveHeight;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      handleResize();
      const { width, height } = canvas;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, width, height);
      drawWave(numberOfWaves, ctx, width, height, time, {
        n: numberOfWaves,
        ctx,
        w: width,
        h: height,
        t: time,
      });
      time += 1;
      animationId = requestAnimationFrame(render);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    backgroundFill,
    waveOpacity,
    waveWidth,
    waveColors,
    numberOfWaves,
    speed,
    getSpeedFactor,
    noise,
    waveHeight,
  ]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 h-full w-full"
        ref={canvasRef}
        id="canvas"
        style={{
          filter: `blur(${blur}px)`,
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
