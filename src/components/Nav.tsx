import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="p-4 shadow-md width-full">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/"
              onClick={() => setActiveLink('home')}
              className={`text-white px-4 py-2 ${activeLink === 'home' ? 'bg-gray-400' : 'hover:bg-gray-600'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/SavedCandidates"
              onClick={() => setActiveLink('SavedCandidates')}
              className={`text-white px-4 py-2 ${activeLink === 'SavedCandidates' ? 'bg-gray-400' : 'hover:bg-gray-600'}`}>
              Saved Candidates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
