import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [activeLinks, setActiveLinks] = useState([false, false, false]);

  const handleClick = (index:number) => {
    const newActiveLinks = [...activeLinks];
    newActiveLinks[index] = true;
    setActiveLinks(newActiveLinks);
  };

  return (
    <div className="navbar">
      <ul>
        <Link
          to="/"
          className={activeLinks[0] ? "active-link-1" : ""}
          onClick={() => handleClick(0)}
        >
          <li>Cube</li>
        </Link>
        <Link
          to="/sphere"
          className={activeLinks[1] ? "active-link-2" : ""}
          onClick={() => handleClick(1)}
        >
          <li>Sphere</li>
        </Link>
        <Link
          to="/cylinder"
          className={activeLinks[2] ? "active-link-3" : ""}
          onClick={() => handleClick(2)}
        >
          <li>Cylinder</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
