import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaServer, FaPython, FaJava, FaGithub, FaCode } from "react-icons/fa";
import {SiMongodb, SiMysql} from 'react-icons/si'

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Profile Image */}
        <div className="flex-1">
          <img
            src="./Images/aboutpage1.jpg" // replace with your image
            alt="Aadarsh Yadav"
            className="rounded-2xl shadow-xl w-85 mx-auto md:mx-0"
          />
        </div>

        {/* Right - About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold text-indigo-600">Aadarsh Yadav</span> — 
            a passionate MERN Stack Developer, Software Engineer, aspiring AI & ML Engineer and Entrepreneurial Mindset. 
            I love building modern, scalable, and user-friendly web applications and Softwares
            that solve real-world problems. My journey in tech started with curiosity 
            and has grown into a mission to craft impactful digital experiences 
            through clean code, creativity, and performance-driven solutions.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            My Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaHtml5 size={32} className="text-blue-500 mb-2" />
              <p className="text-sm font-medium">HTML</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaCss3 size={32} className="text-blue-500 mb-2" />
              <p className="text-sm font-medium">CSS</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaJs size={32} className="text-amber-300 mb-2" />
              <p className="text-sm font-medium">JavaScript</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaReact size={32} className="text-blue-500 mb-2" />
              <p className="text-sm font-medium">React.js</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaNodeJs size={32} className="text-green-600 mb-2" />
              <p className="text-sm font-medium">Node.js</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaServer size={32} className="text-green-600 mb-2" />
              <p className="text-sm font-medium">Express.js</p>
            </div>
             <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <SiMongodb size={32} className="text-yellow-600 mb-2" />
              <p className="text-sm font-medium">MongoDb</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <SiMysql size={32} className="text-yellow-500 mb-2" />
              <p className="text-sm font-medium">MySQL</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaPython size={32} className="text-yellow-600 mb-2" />
              <p className="text-sm font-medium">Python</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaJava size={32} className="text-yellow-600 mb-2" />
              <p className="text-sm font-medium">Java</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaCode size={32} className="text-gray-700 mb-2" />
              <p className="text-sm font-medium">DSA</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
              <FaGithub size={32} className="text-gray-700 mb-2" />
              <p className="text-sm font-medium">GitHub</p>
            </div>
          </div>

          {/* Call to Action */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
