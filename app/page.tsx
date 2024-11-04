"use client";
import { Timeline } from "@/components/ui/timeline";
import About from "./about/page";
import Header from "./header/page";
import Tools from "./skills/page";
import Game from "./Game/page";
import Contact from "./contact/page";

export default function Home() {
  const data = [
    {
      title: "About Me",
      content: (
        <div>
          <About />
        </div>
      ),
    },
    {
      title: "Tools",
      content: (
        <div>
          <Tools />
        </div>
      ),
    },
    {
      title: "Test your skills",
      content: (
        <div>
          <Game />
        </div>
      ),
    },
    {
      title: "Contact",
      content: (
        <div>
          <Contact />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Header />
      <Timeline data={data} />
    </div>
  );
}
