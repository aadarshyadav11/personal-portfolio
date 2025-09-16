import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with MERN stack showcasing my skills and projects.",
    tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    image: "/Images/portfolio_thumbnail.png", // Replace with your project screenshot
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with authentication, cart, and payment system.",
    tech: ["React", "Express", "MongoDB", "Stripe"],
    image: "/Images/thumbnail_ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://myecommerce.com",
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat app with WebSocket integration for instant messaging.",
    tech: ["React", "Node.js", "Socket.IO"],
    image: "/Images/thumbnail_chat.png",
    github: "https://github.com/yourusername/chat-app",
    live: "https://mychatapp.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
        <p className="text-gray-600 mt-4">
          A selection of my favorite projects that highlight my skills and passion for development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
