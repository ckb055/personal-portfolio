import FlipHover from "./FlipHover";

export default function Icons() {
    return (
        
    <div className="flex flex-wrap mt-80 max-w-6xl mx-auto bg-[#F1F1F1] -mt-40 dark:bg-black">
        
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

    </div>
    )
}