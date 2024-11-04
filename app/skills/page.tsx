import { toolsList } from "./toolsList";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

//showing the tools I use
export default function Tools() {
  return (
    <div className="flex flex-col ">
      <div
        key={"tools"}
        className="flex flex-row flex-wrap item-center m-auto md:w-2/3 text-center justify-center"
      >
        <h1 className="text-2xl font-bold text-center mb-10">
          Here is the tools I use in my daily work, but open and continue to
          learn new one every day!
        </h1>
        {toolsList
          .filter((item) => item.id !== undefined)
          .map((item) => (
            <AnimatedTooltip key={item.id} items={[item]} />
          ))}
      </div>
    </div>
  );
}
