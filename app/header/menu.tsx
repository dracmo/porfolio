"use client";

import { ToggleThemeButton } from "@/components/themes/ToggleThemeButton";

const Menu = () => {
  const scrollToSection: (id: string) => void = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hidden flex-row mx-auto mb-5 gap-8  font-bold font-playfair md:flex ">
      <button
        onClick={() => scrollToSection("game")}
        className="text-lg bg-primary text-primary-foreground shadow hover:bg-primary/90 px-3 py-2 rounded-[10px]"
      >
        {"Test your skills"}
      </button>
      {/* <button
        onClick={() => scrollToSection("services")}
        className="text-lg bg-primary text-primary-foreground shadow hover:bg-primary/90 px-3 py-2 rounded-[10px]"
      >
        {"Services"}
      </button> */}
      <button
        onClick={() => scrollToSection("contact")}
        className="text-lg bg-primary text-primary-foreground shadow hover:bg-primary/90 px-3 py-2 rounded-[10px]"
      >
        {"Contact"}
      </button>
      <ToggleThemeButton className="text-lg" />
    </div>
  );
};
export default Menu;
