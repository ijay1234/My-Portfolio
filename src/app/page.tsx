import Image from "next/image";


export default function Home() {
  const projects = [
    {
      name: "Ecommerce website",
      description: "An Ecommerce website built with Next.js",
      image: "/assets/Screenshot 2025-10-04 at 21.44.11.png",
      link: "https://ecommerce-website-production-b159.up.railway.app/",
    },
    {
      name: "Expense Tracker",
      description: "Help to track Expense. This project was built with reactJs",
      image: "/assets/Screenshot 2025-10-05 at 20.42.15.png",
      link: "https://expense-tracker-1-hs9t.onrender.com/",
    },
    {
      name: "Project Three",
      description: "A React & Tailwind portfolio website",
      image: "/assets/Screenshot 2025-10-05 at 20.44.25.png",
      link: "https://task-app-7qx5.onrender.com/",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 to-pink-500 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">Hi, I&apos;m Ijeoma</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-200">
          Frontend Developer | MERN stack & Next.js
        </p>
        <p className="text-lg mb-6">Let&apos;s build something amazing together!</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          See My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I&apos;m a passionate frontend developer creating modern, responsive, and interactive web applications using React, Next.js, Redux, NodeJs, ExpressJs and Tailwind CSS. I love turning ideas into visually appealing and user-friendly digital experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                <p className="text-gray-200 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 text-center bg-gradient-to-r from-pink-500 to-purple-700 text-white">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">Let&apos;s build something amazing together!</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-100">
        &copy; {new Date().getFullYear()} Ijeoma Igbokwe. All rights reserved.
      </footer>
    </div>
  );
}
