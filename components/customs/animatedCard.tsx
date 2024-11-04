"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  item: { src: string; text: string; name: string };
  className?: string;
  divClassName?: string;
  imageSizes: { width: number; height: number };
}

export function AnimatedCard({
  item,
  className,
  divClassName,
  imageSizes,
}: AnimatedCardProps) {
  return (
    <div key={item.name}>
      <CardContainer className={cn("inter-var", divClassName)}>
        <CardBody className={className}>
          <CardItem as="p" translateZ="70">
            <Image
              src={item.src}
              alt={item.name}
              width={imageSizes.width}
              height={imageSizes.height}
            ></Image>
          </CardItem>
          <div className="flex justify-between items-center">
            <CardItem
              translateZ={40}
              className="px-4 py-2 rounded-xl text-text text-lg font-bold"
            >
              <h1>{item.text}</h1>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
