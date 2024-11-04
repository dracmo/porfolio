import { AnimatedCard } from "@/components/customs/animatedCard";
import { Typography } from "@/components/customs/Typography";
import { AboutCardList } from "./CardList";
import Image from "next/image";

// @ts-nocheck
export default function About() {
  // const scrollToSection = (id: string) => () => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="flex flex-col items-center sm:w-full md:mt-20 mt-10 ">
      <Typography variant="h1">
        From Plates to Pages: Developing with the Artistry of a Chef
      </Typography>
      <Typography variant="subTitle" className="mb-10">
        Welcome to my world of code, where creativity meets functionality. With
        over a decade of discipline and consistency honed in luxury kitchens
        around the world, I bring the same dedication to my work as a software
        developer.
      </Typography>
      <div className="flex flex-col md:flex-row gap-12 mb-10">
        {AboutCardList.map((item) => {
          const imageSizes = { width: 150, height: 150 };
          return (
            <AnimatedCard
              key={item.name}
              item={item}
              imageSizes={imageSizes}
              className="relative  bg-violet-950/90 rounded-xl flex flex-col items-center justify-center w-full h-full shadow-inner shadow-slate-950"
              divClassName="p-1  rounded-xl MovingBG bg-gradient-to-br from-violet-500/50 via-red-500/50 to-blue-500/50 w-64 h-64 "
            />
          );
        })}
      </div>
      <div className="flex flex-row w-3/4 m-auto mt-10">
        <Typography className="mb-10 w-1/2">
          I’m Bouaziz Jeremy, a former French chef turned software developer,
          blending my unique experiences from the culinary world with a deep
          passion for coding. I’ve lived and worked across multiple countries,
          including Canada and Japan, constantly adapting and evolving. Today, I
          channel my skills into creating innovative, user-friendly web
          solutions.
        </Typography>
        <Image
          alt={"profile picture"}
          src="/image/Mypicture.jpg"
          width={200}
          height={300}
          style={{ width: "auto", height: "auto" }}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
