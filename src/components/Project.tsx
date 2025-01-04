import { useState } from "react";

interface projectprops {
  status: String;
  category: String;
  commits: String[];
}

export default function Project({ status, category, commits }: projectprops) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      className="md:w-[50%] w-full lg:w-full cursor-pointer drop-shadow-lg"
      //onClick={() => navigate("/maintenance")}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div
        className={`w-full h-[300px] sm:h-[350px] flex justify-center items-center relative rounded-lg overflow-hidden transition-all ease-in-out duration-300 ${
          hovered ? "p-1" : "p-0"
        }`}
      >
        <img
          src="/icons/ongoingbg.svg"
          className="rounded-lg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
        <div className="bg-black w-full h-full absolute bg-opacity-75" />
        <div
          className={`bg-color2 glowBox rounded-full absolute  drop-shadow-lg transition-all ease-in-out duration-300 ${
            hovered ? "bg-opacity-5 p-[2rem]" : "bg-opacity-25 p-[1rem]"
          }`}
        >
          <img
            src="/icons/lock.svg"
            width={45}
            className={`${
              hovered
                ? "scale-[150%] translate-y-[-10px]"
                : "scale-[100%] translate-y-[0px]"
            } transition-all ease-in-out duration-300`}
            alt=""
          />
        </div>
        <div className="bg-color2 bg-opacity-25 rounded-lg absolute top-[1rem] left-[1rem] px-4 py-2 drop-shadow-lg">
          <h1 className="">{status}</h1>
        </div>
        <div className="bg-color2 bg-opacity-25 rounded-lg absolute bottom-[1rem] left-[1rem] px-4 py-2 drop-shadow-lg">
          <h1>{category}</h1>
        </div>
        <div className="bg-color2 bg-opacity-25 rounded-lg absolute top-[1rem] right-[1rem] p-1 drop-shadow-lg">
          <img src="/icons/notice.svg" width={25} alt="" />
        </div>
        <div className="absolute bottom-[1rem] right-[1rem] drop-shadow-lg space-y-2">
          <ul className="space-y-1">
            {commits.map((commit, index) => {
              return (
                <li key={index} className="flex justify-end">
                  <div>{`[${commit}]`}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}
