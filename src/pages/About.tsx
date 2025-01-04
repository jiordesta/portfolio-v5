import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();

  const Education = () => {
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div className="w-full md:w-[70%] flex items-center">
          <p className="text-center md:text-end">
            I earned my Bachelor of Science in Computer Science from Caraga
            State University, located in Ampayon, Butuan City 8600. On July 22,
            2023, I had the immense pleasure of proudly graduating with this
            degree, marking a significant milestone in my academic journey. This
            achievement is a testament to my unwavering dedication, hard work,
            and determination to master the intricacies of the digital world. As
            a Computer Science graduate, I am eagerly looking forward to
            embracing the vast array of opportunities that await me, confident
            in my ability to leave a meaningful impact in the ever-evolving
            realm of technology.
          </p>
        </div>
        <div className="w-full md:w-[30%] transition-all ease-in-out duration-300">
          <img
            src="/images/profile.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg cursor-pointer"
            alt=""
            onClick={() => navigate("/about/profile")}
          />
        </div>
      </div>
    );
  };

  const Leader = () => {
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div className="w-full md:w-[30%] transition-all ease-in-out duration-300">
          <img
            src="/images/leader.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg cursor-pointer"
            alt=""
            onClick={() => navigate("/about/leader")}
          />
        </div>
        <div className="w-full md:w-[70%] flex items-center">
          <p className="text-center md:text-start">
            Led and guided a dedicated thesis team to successful completion,
            demonstrating exceptional leadership skills and fostering a
            collaborative environment that propelled us toward our research
            objectives. Through effective communication, strategic planning, and
            adept project management, I ensured that our team remained focused,
            motivated, and united in achieving our shared academic goal. This
            leadership resulted in a cohesive team dynamic and a thesis that
            stands as a testament to our collective efforts and commitment to
            advancing knowledge in our field.
          </p>
        </div>
      </div>
    );
  };

  const Award = () => {
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div className="w-full md:w-[70%] flex items-center">
          <p className="text-center md:text-end">
            Receiving the prestigious award for best oral presenter at the
            esteemed 2nd International Conference of Computing and Information
            Sciences (CIScon) 2023 was a moment of validation and pride in my
            academic journey. This accolade serves as a testament to the
            countless hours of dedication and hard work poured into refining my
            presentation skills and advancing knowledge in the field. At CIScon
            2023, I had the privilege of engaging with fellow scholars and
            sharing insights from my research, employing effective communication
            techniques to captivate the audience and foster meaningful
            discourse. Winning this award not only affirms the value of my
            contributions but also inspires me to continue striving for
            excellence in my academic pursuits, with a renewed sense of purpose
            and determination.
          </p>
        </div>
        <div className="w-full md:w-[30%] transition-all ease-in-out duration-300">
          <img
            src="/images/award.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg cursor-pointer"
            alt=""
            onClick={() => navigate("/about/award")}
          />
        </div>
      </div>
    );
  };

  const Internship = () => {
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div className="w-full md:w-[30%] transition-all ease-in-out duration-300">
          <img
            src="/images/internship.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg cursor-pointer"
            alt=""
            onClick={() => navigate("/about/internship")}
          />
        </div>
        <div className="w-full md:w-[70%] flex items-center">
          <p className="text-center md:text-start">
            Acknowledged for exemplary performance as an intern through the
            receipt of a certificate, symbolizing a commendable commitment to
            exceeding expectations and making substantial contributions to team
            projects. This recognition reflects a demonstrated work ethic
            characterized by adaptability, diligence, and a remarkable aptitude
            for grasping complex tasks swiftly. The certificate serves as
            tangible evidence of the invaluable contributions made towards the
            attainment of the organization's objectives, highlighting the
            significance of dedication, adaptability, and a proactive approach
            in fostering success within the professional sphere.
          </p>
        </div>
      </div>
    );
  };

  const [src, setsrc] = useState("");

  const ExpandImage = () => {
    return (
      <div className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-40">
        <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[30%] p-[1rem] md:p-0 relative">
          <img src={src} className="rounded-lg" alt="" />
          <div className="absolute top-1 right-1 p-1 rounded-full transition-all ease-in-out duration-300 bg-color2 bg-opacity-25 cursor-pointer">
            <img
              src="/icons/close.svg"
              onClick={() => navigate("/about")}
              width={25}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  const Skills = () => {
    const skills = [
      "ReactJS",
      "ReactNative",
      "ExpressJS",
      "NodeJS",
      "NextJS",
      "MongoDB",
      "Firebase",
      "Redux",
      "Ant-Design",
      "Bootstrap",
      "MaterialUI",
      "TailwindCSS",
      "HTML",
      "CSS",
      "Javascript",
      "Java",
      "Python",
      "C",
      "Typescript",
      "git",
    ];
    return (
      <div className="w-full lg:w-1/2">
        <h1 className="text-center">
          Throughout my journey, I’ve cultivated a wide range of skills that
          empower me to navigate and excel in diverse technological landscapes
        </h1>
        <ul className="flex flex-wrap gap-1 justify-center items-center skillscontainer">
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className="px-4 py-2 bg-color2 drop-shadow-lg rounded-lg glowText cursor-default"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const { section } = useParams();

  useEffect(() => {
    if (section === "profile") {
      setsrc("/images/profile.jpg");
    }
    if (section === "leader") {
      setsrc("/images/leader.jpg");
    }
    if (section === "award") {
      setsrc("/images/award.jpg");
    }
    if (section === "internship") {
      setsrc("/images/internship.jpg");
    }
  }, [section]);

  return (
    <PageLayout id="about">
      {section && <ExpandImage />}
      <div className="pb-[6rem] space-y-4">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <Education />
          <Leader />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <Award />
          <Internship />
        </div>
      </div>
    </PageLayout>
  );
}
