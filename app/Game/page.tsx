"use client";
import { JanKenExport } from "@/components/customs/JanKen/JanKenExport";
import { MemorySection } from "@/components/customs/memoryGame/MemorySection";
import { Typography } from "@/components/customs/Typography";

export default function Game() {
  return (
    <div className="flex flex-col">
      <div className="items-center m-auto md:w-1/2 md:mt-20 w-3/4">
        <Typography variant="title" className="mt-10">
          It&apos;s Time to take some rest!
        </Typography>
        <Typography>
          I understand how exhausting it can be to go through one portfolio
          after another, so this section is designed just for you.
          <br />
          <br />
          Take a moment to relax and enjoy exploring my skills, and hopefully,
          you&apos;ll find some satisfaction along the way.
          <br />
          <br />
          In this section of the portfolio, you’ll find a selection of simple
          games I’ve created using JavaScript, crafted especially for you to
          enjoy!
        </Typography>
      </div>
      <div className="pt-5 md:pt-10 mb-10">
        <MemorySection />
      </div>
      <JanKenExport className="mb-20" />
    </div>
  );
}
