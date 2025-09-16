import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-blue-600">Aadarsh Yadav</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
            A passionate <span className="font-semibold">MERN Stack Developer, Software Engineer and Aspiring AI & ML Engineer </span> 
            I build modern and impactful web applications and Softwares with the MERN stack, Python, Java — blending creativity, performance, and clean code. 
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition shadow-md"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full h-full">
          <img
            src="/Images/profile.jpg"
            alt="Profile-image"
            className="w-117 h-135 rounded-full shadow-lg border-4 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
