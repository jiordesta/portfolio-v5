import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { featuredProjects } from "../data/projects";
import { useNavigate, useParams } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  type Project = {
    id: String;
    name: String;
    description: String;
    status: String;
    repo: String;
    link: String;
    img: String;
  };

  interface projectprops {
    project: Project;
  }

  const Project = ({ project }: projectprops) => {
    const { id, name, description, img, repo, link } = project;
    const [hovered, setHovered] = useState(false);
    const [gitHover, setGitHover] = useState(false);
    const [linkHover, setLinkHover] = useState(false);
    return (
      <div
        className={`h-[450px] bg-color2 rounded-xl ${
          hovered ? "p-1 bg-opacity-5 glowBox" : "p-2 bg-opacity-25"
        } drop-shadow-lg transition-all ease-in-out duration-300 cursor-pointer`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="h-[60%]" onClick={() => navigate(`/projects/${id}`)}>
          <img
            src={`${img}`}
            className="object-cover w-full h-full flex justify-center items-center rounded-lg"
            alt=""
          />
        </div>
        <div className="h-[40%]">
          <div className="h-full">
            <div className="h-3/4 overflow-hidden">
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
            <div className="h-1/4 flex justify-end items-end">
              <div className="flex gap-2">
                <div
                  className={`bg-color2 bg-opacity-25 rounded-full flex gap-2 p-1 pe-3 drop-shadow-lg ${
                    gitHover && "glowBox"
                  } transition-all ease-in-out duration-400 cursor-pointer`}
                  onMouseEnter={() => setGitHover(true)}
                  onMouseLeave={() => setGitHover(false)}
                  onClick={() => {
                    window.open(`${repo}`, "_blank");
                  }}
                >
                  <div className="bg-color3 p-1 rounded-full glowBox">
                    <img
                      src="/icons/github.svg"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="glowText">Github</h1>
                  </div>
                </div>
                <div
                  className={`bg-color2 bg-opacity-25 rounded-full flex gap-2 p-1 pe-3 drop-shadow-lg ${
                    linkHover && "glowBox"
                  } transition-all ease-in-out duration-400 cursor-pointer`}
                  onMouseEnter={() => setLinkHover(true)}
                  onMouseLeave={() => setLinkHover(false)}
                  onClick={() => {
                    window.open(`${link}`, "_blank");
                  }}
                >
                  <div className="bg-color3 p-1 rounded-full glowBox">
                    <img src="/icons/visit.svg" width={25} height={25} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="glowText">Visit</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const { index } = useParams();

  interface ExpandProps {
    project: Project;
  }

  const ExpandProject = ({ project }: ExpandProps) => {
    const { name, img, description } = project;
    return (
      <div className="fixed bg-black bg-opacity-75 inset-0 w-full h-full flex justify-center items-center z-30 px-[1rem] md:px-0">
        <div className="w-full md:w-1/2 lg:w-[35%] relative">
          <div className="absolute top-1 right-1 p-1 rounded-full transition-all ease-in-out duration-300 bg-color2 bg-opacity-25 cursor-pointer">
            <img
              src="/icons/close.svg"
              onClick={() => navigate("/projects")}
              width={25}
              alt=""
            />
          </div>
          <div className="bg-color2 rounded-lg">
            <div className="h-[300px]">
              <img
                src={`${img}`}
                alt=""
                className="rounded-t-lg object-cover w-full h-full"
              />
            </div>
            <div className="h-[150px] pb-[1rem] overflow-auto custom-scrollbar relative">
              <h1 className="px-[1rem] pt-[1rem] bg-color2 uppercase text-2xl glowText sticky top-0">
                {name}
              </h1>
              <p className="px-[1rem]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [expand, setExpand] = useState<Project | null>(null);
  useEffect(() => {
    const project = featuredProjects.find((project) => project.id === index);
    if (project) {
      setExpand(project);
    } else {
      setExpand(null);
    }
  }, [index]);

  return (
    <PageLayout id="projects">
      <div className="min-h-screen w-full flex flex-col lg:flex-row gap-4 pb-[6rem]">
        <ul className="grid gap-[1rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProjects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </ul>
      </div>
      {expand && <ExpandProject project={expand} />}
    </PageLayout>
  );
}
