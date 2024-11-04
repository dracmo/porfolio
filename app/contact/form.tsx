"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { gradients } from "@/components/customs/tailwind";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnqpogb");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center m-auto w-1/2 text-center border-zinc-500 border-2 rounded-md bg-primary/5">
        <p className="p-8 text-xl ">
          メッセージありがとうございます。
          <br /> できるだけ早くご連絡いたします！
        </p>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex flex-col h-full md:w-1/2 relative m-auto mt-20 w-[90%]",
        "p-1  rounded-xl ",
        gradients
      )}
    >
      <form
        id="contact"
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col  m-auto item-center text-center ",
          "relative  bg-violet-950/90 rounded-xl flex flex-col items-center justify-center w-full h-full shadow-inner shadow-slate-950"
        )}
      >
        <div className="flex flex-col m-auto text-center sm:w-1/2 w-[90%] gap-8 mt-8">
          <p>
            Please feel free to contact me if you have any questions or would
            like to work together.
          </p>
        </div>
        <div className="my-8 flex flex-col gap-2 sm:w-3/4 w-[90%] m-auto text-left">
          <label htmlFor="name">Name:</label>
          <Input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="company">Conpany:</label>
          <Input id="company" type="text" name="company" />
          <ValidationError
            prefix="company"
            field="company"
            errors={state.errors}
          />
          <label htmlFor="email">Email:</label>
          <Input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message:</label>
          <div className="p-[2px] rounded-xl MovingBG bg-gradient-to-br from-zinc-700 via-white to-zinc-700">
            <textarea
              id="message"
              name="message"
              className="w-full h-full p-4 bg-primary  focus:bg-primary-foreground  rounded-xl"
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            variant={"outline"}
            className="rounded-xl mt-2 bg-primary-foreground hover:bg-primary border-none hover:shadow-inner hover:shadow-slate-700 shadow-inherit "
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

const Input = ({
  id,
  type,
  name,
}: {
  id: string;
  type: string;
  name: string;
}) => {
  return (
    <div className="p-[2px]  rounded-xl MovingBG bg-gradient-to-br from-zinc-700 via-white to-zinc-700">
      <input
        id={id}
        type={type}
        name={name}
        className={cn(
          "w-full h-full p-4 bg-primary focus:bg-primary-foreground  rounded-xl"
        )}
      />
    </div>
  );
};
