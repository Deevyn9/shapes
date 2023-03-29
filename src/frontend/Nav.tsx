import { Link } from "react-router-dom";
// import { useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  // const [activeLinks, setActiveLinks] = useState<string>("");

  //   const handleClick = (link: string) => {
  //       setActiveLinks(link)
  // };

  const location = useLocation()

  return (
    <div className="navbar">
      <ul>
        <Link
          to="/"
          className={location.pathname === "/" ? "active-link" : ""}
          // style={{ color: activeLinks === "/" ? "#47E10C" : "white" }}
          // onClick={() => handleClick("/")}
        >
          <li>Cube</li>
        </Link>
        <Link
          to="/cylinder"
          className={location.pathname === "/cylinder" ? "active-link" : ""}
          // style={{ color: activeLinks === "/cylinder" ? "red" : "white" }}
          // onClick={() => handleClick("/cylinder")}
        >
          <li>Cylinder</li>
        </Link>
        <Link
          to="/sphere"
          className={location.pathname === "/sphere" ? "active-link" : ""}
          // style={{ color: activeLinks === "/sphere" ? "blue" : "white" }}
          // onClick={() => handleClick("/sphere")}
        >
          <li>Sphere</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
