"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import { useState } from "react";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function MovingImage({
  item,
}: {
  item: { src: string; name: string };
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full flex items-center justify-center p-8 ">
      <div className="md:w-20 md:h-20 w-16 h-16">
        <Tilt options={defaultOptions} className="w-full h-full">
          <div className="relative w-full h-full rounded-full shadow-2xl transition-all duration-500 ease-out overflow-hidden">
            {/* Animated border */}
            <div className="MovingBG absolute inset-0 rounded-full  bg-gradient-to-br from-purple-600 via-emerald-500 to-yellow-600 " />

            {/* Inner content */}
            <div className="absolute inset-1 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden p-1">
              <div className="relative h-full w-full ">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`
                    duration-700 ease-in-out
                    ${
                      isLoading
                        ? "scale-100 opacity-0"
                        : "scale-100 opacity-100"
                    }
                    hover:scale-110 transition-transform
                  `}
                  onLoad={() => setLoading(false)}
                />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
