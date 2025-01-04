import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/nav";

interface NavLinkProps {
  path: string,
  image: string
}

const NavLink = ({path, image}: NavLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinkClass =
  "p-2 border-4 border-color1 hover:bg-opacity-25 transition-opacity ease-in-out duration-300 bg-color2 rounded-full";

  const handleNavigate = () => {
    navigate(`${path}`);
  };

  return   <li className="navlink">
      <button
        className={`${navLinkClass} ${
          location.pathname === path ? "glowBox" : ""
        }`}
        onClick={() => handleNavigate()}
      >
        <img
          src={`${image}`}
          className="w-[25px] md:w-[30px] lg:w-[35px]"
          alt=""
        />
      </button>
    </li>
}

export default function Navigator() {

  return (
    <div className="fixed bottom-0 left-0 w-full px-2 pb-2 md:px-4 md:pb-4 lg:px-6 lg:pb-6 flex justify-end align-center">
      <nav className="fixed bottom-[1rem] w-full flex justify-center drop-shadow-lg z-20">
        <ul className="flex gap-2 bg-color2 rounded-full p-1 bg-opacity-25 navcontainer">
          {
            navLinks.map((nav) => {
              return <NavLink path={nav.path} image={nav.image} key={nav.id}/>
            })
          }
        </ul>
      </nav>
    </div>
  )
}
