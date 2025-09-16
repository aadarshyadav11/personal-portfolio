import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Aadarsh Yadav</h2>
          <p className="text-sm text-gray-400">
            MERN Stack Developer | Crafting impactful web applications
          </p>
        </div>

        {/* Middle - Navigation */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/blogs" className="hover:text-white transition">Blogs</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-5">
          <a href="https://github.com/aadarshyadav11" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/aadarsh-yadav-80a49332b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={22} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={22} />
          </a>
           <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaYoutube size={22} />
          </a>
           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aadarsh Yadav. All Rights Reserved.
      </div>
    </footer>
  );
}
