"use client";
import { useEffect, useState } from "react";
import styles from "./ToggleThemeButton.module.css";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const ToggleThemeButton = ({ className }: { className: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <div className={cn(className, "relative overflow-hidden rounded-full p-4")}>
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={cn("absolute inset-2 h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: theme === "light",
          [styles.exit]: theme === "dark",
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={cn("absolute inset-1 h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: theme === "dark",
          [styles.exit]: theme === "light",
        })}
      />
    </div>
  );
};
