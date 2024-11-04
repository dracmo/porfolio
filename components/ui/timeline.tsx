"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { gradients } from "../customs/tailwind";
// import { MenulistItem } from "@/app/header/MenuListItem";
// import { FloatingNav } from "./floating-navbar";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      {/* <FloatingNav navItems={MenulistItem} /> */}
      <div ref={ref} className="relative  mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-start pt-10 md:pt-40 md:gap-2"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs  md:w-full">
              <div className="h-10 absolute -left-1 md:left-3 w-10 rounded-full bg-slate-400 dark:bg-gray-950 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className={cn(
                  "hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-transparent bg-clip-text",
                  gradients
                )}
              >
                {item.title}
                <div className={cn("h-[2px] rounded-full", gradients)} />
              </h3>
            </div>

            <div className="relative pl-14 md:pl-0 pr-4  w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold pb-[2px] w-fit">
                {item.title}
                <div className={cn("h-[2px] rounded-full", gradients)} />
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
