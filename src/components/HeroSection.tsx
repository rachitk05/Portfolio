"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (<>
    <div className="h-auto md:h-[40rem] waw-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="none"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 transparent">
          RACHIT KUMAR
        </h1>


        <div className="mt-2 w-screen h-50 relative -z-10">
          {/* Gradients */}
          <div
              className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
          <div
              className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
          <div
              className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
          <div
              className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

          {/* Core component */}

          <br/>

          {/* Radial Gradient to prevent sharp edges */}
          <div
              className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          <div className="-mt-4 -ml-8 z-10">
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-screen-lg mx-auto">
              🌟 Crafting Code and Chasing Dreams 🚀️<br></br>💡 Learning Bit by Bit 🚀 | 1 Bit at a time.
              💻 <br></br><br></br>👨🏻‍🎓Undergrad
              @NST <br></br> FrontEnd Web Developer <br></br>Competitive Programmer <br></br> Explorer 🚀
            </p>
            <div className="mt-4">
              <Link
                  href="https://docs.google.com/document/d/1Xd7wJ2pfoLmgxXO0qdZFKXHxyNHljgNFcGgepANYsPg/edit?usp=sharing">
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

export default HeroSection;
