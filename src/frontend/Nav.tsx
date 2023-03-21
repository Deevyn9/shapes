import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [activeLinks, setActiveLinks] = useState<string>('/');

    const handleClick = (link: string) => {
        setActiveLinks(link)
  };

  return (
    <div className="navbar">
      <ul>
        <Link
          to="/"
          style={{ color: activeLinks === "/" ? "#47E10C" : "white" }}
          onClick={() => handleClick("/")}
        >
          <li>Cube</li>
        </Link>
        <Link
          to="/sphere"
          style={{ color: activeLinks === "/sphere" ? "blue" : "white" }}
          onClick={() => handleClick("/sphere")}
        >
          <li>Sphere</li>
        </Link>
        <Link
          to="/cylinder"
          style={{ color: activeLinks === "/cylinder" ? "red" : "white" }}
          onClick={() => handleClick("/cylinder")}
        >
          <li>Cylinder</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
