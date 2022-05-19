import React from "react";
import UserData from "./../constants/data";
import Link from "next/link";
import FlipHover from "./FlipHover";

export default function AboutMe() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <header className="md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-6xl font-bold text-gray-500 md:my-0 md:text-white dark:text-gray-300 text-center">
            About me!
          </h1>
          <p className="pt-10 text-center">
          Hi! I'm a Software Engineer that's highly interested in Frontend/Fullstack Development, with libraries/frameworks such as React, Vue, and MERN stack. 
          I'm also highly comfortable in developing with Java and JUnit. Outside of my Software Engineering life, 
          I find myself amidst a plethora of hobbies, such as music production, beatboxing, singing, playing the flute and even the guitar.
          </p>
          {/*bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 text-center" */}
          <h1 className="text-6xl lg:text-6xl font-bold text-gray-500 md:my-0 pt-10 md:text-white dark:text-gray-300 text-center">
              Technical Skills
            </h1>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-500 md:my-0 pt-10 md:text-white dark:text-gray-300 text-center">
              Languages
            </h2>
            
            <div className="flex flex-wrap mt-8 justify-center">
              
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"}
                backText={"Javascript"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"}
                backText={"Java"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"}
                backText={"Typescript"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"}
                backText={"CSS"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"}
                backText={"HTML"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"}
                backText={"Python"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png"}
                backText={"C++"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/c/c.png"}
                backText={"C"}
              />
              
            </div>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-500 md:my-0 pt-10 md:text-white dark:text-gray-300 text-center">
              Frameworks/Libraries
            </h2>
            <h3 className="text-3xl lg:text-3xl font-bold text-gray-500 md:my-0 pt-10 md:text-white dark:text-gray-300 text-center">
              Frontend
            </h3>
            <div className="flex flex-wrap mt-8 justify-center">
            <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"}
                backText={"Vue"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"}
                backText={"React"}
              />
              <FlipHover frontImage={"https://blog.knoldus.com/wp-content/uploads/2019/12/mocha.png"}
                backText={"Mocha"}
                />
                 <FlipHover frontImage={"https://avatars.githubusercontent.com/u/1515293?s=280&v=4"}
                backText={"Chai"}
                />
              </div>
              <h3 className="text-3xl lg:text-3xl font-bold text-gray-500 md:my-0 pt-10 md:text-white dark:text-gray-300 text-center">
              Backend/Database
            </h3>
            <div className="flex flex-wrap mt-8 justify-center">
            <FlipHover frontImage={"https://miro.medium.com/max/1400/1*O68LbDvD5Dcsnez73M7v4Q.png"}
                backText={"Springboot"}
              />
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"}
                backText={"MongoDB"}
                />
                 <FlipHover frontImage={"https://avatars.githubusercontent.com/u/874086?s=280&v=4"}
                backText={"JUnit"}
                />
                <FlipHover frontImage={"https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"}
                backText={"ExpressJS"}
                />
                <FlipHover frontImage={"https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"}
                backText={"NodeJS"}
                />
      
              </div>
              <h3 className="text-3xl lg:text-3xl font-bold text-gray-500 md:my-0 pt-10 md:text-white dark:text-gray-300 text-center">
              Version Control, CI/CD tools
            </h3>
            <div className="flex flex-wrap mt-8 justify-center">
              <FlipHover frontImage={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"}
                backText={"Git"}
              />
              </div>
              
                

        </header>

      </div>
    </div>
    
  );
}