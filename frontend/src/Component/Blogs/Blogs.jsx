import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Getting Started with the MERN Stack",
    excerpt: "Learn how to build modern web applications using MongoDB, Express, React, and Node.js...",
    date: "Sep 12, 2025",
    readTime: "5 min read",
    image: "/Images/thumbnail_MERN.png", // replace with your blog cover
    link: "https://medium.com/@yourprofile/mern-stack-intro"
  },
  {
    id: 2,
    title: "10 Tips to Write Clean and Scalable Code",
    excerpt: "Writing clean code is not just about readability, it's about long-term maintainability...",
    date: "Aug 28, 2025",
    readTime: "7 min read",
    image: "/Images/thumbnail_clean_code.png",
    link: "https://dev.to/yourprofile/clean-code-tips"
  },
  {
    id: 3,
    title: "Understanding React Hooks Deeply",
    excerpt: "Hooks revolutionized React development. Let's dive into useState, useEffect, and custom hooks...",
    date: "Aug 10, 2025",
    readTime: "6 min read",
    image: "/Images/thumbnail_react_hook.png",
    link: "https://hashnode.com/@yourprofile/react-hooks-guide"
  }
];

export default function BlogSection() {
  return (
    <section id="blogs" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Latest Blogs</h2>
        <p className="text-gray-600 mt-4">
          Sharing my thoughts, tutorials, and experiences in software development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>

              {/* Meta Info */}
              <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {blog.readTime}
                </span>
              </div>

              {/* Read More */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
              >
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
