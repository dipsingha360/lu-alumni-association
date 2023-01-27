import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-warp  bg-indigo-600">
      <div className="navbar container mx-auto flex justify-between items-center py-5 ">
        <Link to="/" className="text-4xl text-indigo-50 font-bold">
          LOGO
        </Link>
        <ul className="links flex gap-10">
          <li>
            <Link
              to="/"
              className="text-indigo-50 hover:text-cyan-300 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="text-indigo-50 hover:text-cyan-300 duration-300"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="text-indigo-50 hover:text-cyan-300 duration-300"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/magazine"
              className="text-indigo-50 hover:text-cyan-300 duration-300"
            >
              Magazine
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-indigo-50 hover:text-cyan-300 duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-indigo-50 hover:text-cyan-300 duration-300"
            >
              Login
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
