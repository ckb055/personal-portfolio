import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import userData from "@constants/data";

export default function Dashboard() {

  const colors = ["#750000",  "#610000", "#470000", "#340000"];
  return (
    
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="md:w-1/2 mx-auto">
          <img src={userData.avatarUrl} alt="avatar" className="shadow" width="400" height="400"/>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <Highlight color={colors[0]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Hi! I'm
            </h1>
          </Highlight>
          <Highlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Kai Bin
            </h1>
          </Highlight>
          <Highlight color={colors[2]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              and I'm an aspiring
            </h1>
          </Highlight>
          <Highlight color={colors[3]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Software Engineer
            </h1>
          </Highlight>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
