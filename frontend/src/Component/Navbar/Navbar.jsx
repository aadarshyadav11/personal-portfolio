import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-blue-600">
              Aadarsh Yadav
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="text-gray-900 hover:bg-gray-200 px-5 py-3 rounded-md">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:bg-gray-200 px-5 py-3 rounded-md">
              About
            </Link>
            <Link to="/projects" className="text-gray-900 hover:bg-gray-200 px-5 py-3 rounded-md">
              Projects
            </Link>
            <Link to="/blogs" className="text-gray-900 hover:bg-gray-200 px-5 py-3 rounded-md">
              Blogs
            </Link>
            <Link to="/contact" className="text-gray-900 hover:bg-gray-200 px-5 py-3 rounded-md">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
