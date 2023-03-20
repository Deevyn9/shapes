import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Cube</li>
        </Link>
        <Link to="/sphere">
          <li>Sphere</li>
        </Link>
        <Link to="/cylinder">
          <li>Cylinder</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav