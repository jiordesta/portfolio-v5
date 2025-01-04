import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Project from "../components/Project";
import { projects } from "../data/projects";

const Profile = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-full space-y-2">
      <h1 className="bg-color2 bg-opacity-25 drop-shadow-lg rounded-lg px-4 py-2 w-full text-center glowText">
        John Irson Ordesta
      </h1>
      <div
        className={`bg-color2 drop-shadow-lg rounded-lg ${
          hovered ? "p-1 bg-opacity-5" : "p-[1rem] bg-opacity-25"
        } transition-all ease-in-out duration-300`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src="/images/profile.png" alt="" />
      </div>
      <h1
        className={`bg-color2 bg-opacity-25 drop-shadow-lg rounded-lg px-4 py-2 w-full text-center glowText ${
          hovered && "text-color3"
        }`}
      >
        {hovered ? "Lvl 999: Algorithm Overlord" : "Lvl 1: Rookie Programmer"}
      </h1>
      <h1 className="bg-color2 bg-opacity-25 drop-shadow-lg rounded-lg px-4 py-2 w-full text-center glowText">
        {hovered
          ? "Having transcended mortal coding, this Algorithm Overlord optimizes the unrefactorable and writes solutions beyond mortal comprehension. Every keystroke reshapes the digital universe."
          : "Armed with a dream and a debugger, this budding coder is ready to take on the digital realm—one bug at a time. Currently mastering the ancient art of 'Googling Errors' and wielding the mighty 'Hello World' spell."}
      </h1>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full h-full space-y-2">
      <ul className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-2 glowText">
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </ul>
    </div>
  );
};

const Summary = () => {
  const languages = [
    "Java",
    "Javascript",
    "Python",
    "TypeScript",
    "C",
    "Kotlin",
  ];

  const frameworks = ["NextJs", "NestJs", "Express", "TailwindCSS"];

  const libraries = ["Reactjs", "Ant Design", "Mantine"];

  const tools = [
    "Git",
    "VSCode",
    "SQL Server Management Studio",
    "Draw.IO",
    "Figma",
    "Jira",
  ];

  const storage = ["PostgreSQL", "MongoDB", "Firebase"];

  return (
    <div className="w-full h-full space-y-2">
      <h1 className="bg-color2 bg-opacity-25 drop-shadow-lg rounded-lg px-4 py-2 w-full text-center glowText">
        Technical Skills
      </h1>
      <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
        <h1 className="glowText">Programming Languages</h1>
        <ul>
          {languages.map((lang) => {
            return <li key={lang}>{lang}</li>;
          })}
        </ul>
      </div>
      <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
        <h1 className="glowText">Frameworks</h1>
        <ul>
          {frameworks.map((fw) => {
            return <li key={fw}>{fw}</li>;
          })}
        </ul>
      </div>
      <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
        <h1 className="glowText">Libraries</h1>
        <ul>
          {libraries.map((lib) => {
            return <li key={lib}>{lib}</li>;
          })}
        </ul>
      </div>
      <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
        <h1 className="glowText">Developer Tools</h1>
        <ul>
          {tools.map((dt) => {
            return <li key={dt}>{dt}</li>;
          })}
        </ul>
      </div>
      <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
        <h1 className="glowText">Data Storage</h1>
        <ul>
          {storage.map((ds) => {
            return <li key={ds}>{ds}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <PageLayout id="homepage">
      <div className="hidden sm:hidden md:hidden lg:flex gap-2 w-full h-full">
        <Projects />
        <Profile />
        <Summary />
      </div>
      <div className="hidden sm:hidden md:flex lg:hidden flex-col gap-2 w-full h-full">
        <div className="flex gap-2 h-full w-full">
          <Profile />
          <Summary />
        </div>
        <Projects />
      </div>
      <div className="flex md:hidden lg:hidden flex-col gap-2 w-full h-full">
        <Profile />
        <Summary />
        <Projects />
      </div>
    </PageLayout>
  );
}
