import React from "react";
import { Separator } from "./separator";

export function HeroSection03() {
  return (
    <div className="relative pb-8">
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-15 [background-size:20px_20px]"/>
      
      <main className="relative pt-20">
        <div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center">
          <div className="md:flex gap-6 items-center">
            <p className="text-xs text-muted-foreground md:text-sm text-start md:text-right leading-5 max-w-[220px] md:max-w-[180px]">
              I am an AI/ML Engineer based in India, working worldwide.
            </p>
            <h1 className="text-6xl md:text-7xl xl:text-[10rem] font-light leading-none tracking-wider">
              ARTIFICIAL
            </h1>
          </div>

          <div className="md:flex gap-6 items-center">
            <h1 className="text-6xl md:text-7xl xl:text-[10rem] flex font-light leading-none tracking-wider">
              <span>INTELLIG</span>
              <div className="lg:size-40 size-14 md:size-18 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-foreground"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                </svg>
              </div>
              <span>ENCE</span>
            </h1>
            <p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5 max-w-[250px] md:max-w-[180px]">
              Open to all forms of collaboration, regardless of location and language.
            </p>
          </div>

          <div className="md:flex gap-6 items-center">
            <h1 className="text-6xl md:text-7xl xl:text-[10rem] md:flex font-light leading-none tracking-wider">
              <span>MACHINE</span>
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="160"
                  viewBox="0 0 24 24"
                  fill="#f43f5e"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <div className="block lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="#f43f5e"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <span>LEARNING</span>
            </h1>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl w-full px-6 gap-3">
          <div className="md:flex md:mx-8 grid md:justify-end items-center gap-3">
            <Separator className="w-full my-6 mx-auto max-w-3xl" />
            <div className="text-xs whitespace-nowrap md:text-sm">
              AI/ML
            </div>
            <div className="flex w-full items-end gap-3">
              <span className="text-2xl md:text-4xl font-thin">Dhiwin</span>
              <span className="text-3xl md:text-5xl font-bold italic text-foreground">
                Samrich
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


