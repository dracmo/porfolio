"use client";
import Menu from "./menu";

export default function Header() {
  return (
    <div id="top">
      <div className="sm:w-full w-full h-full flex flex-col mt-2 m-auto relative">
        <Menu />
        <div className="flex h-full w-full m-auto item-center justify-center relative">
          <div className=" flex flex-col  mx-auto h-full font-sans text-4xl ">
            <h1>Hi!</h1>
            <div className="MovingBG bg-gradient-to-r from-teal-500 via-primary to-orange-600 bg-clip-text text-transparent font-bold ">
              <h1>I&apos;m Jeremy</h1>
              <h1>Software Developer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
