import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Hotel/Apartment Booking App",
      desc: "A full-stack hotel booking app built with Laravel, MySQL, and TailwindCSS.",
      image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "My personal React + Tailwind portfolio with smooth animations.",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Gym Management Dashboard",
      desc: "Admin dashboard for managing gym members, subscriptions, and analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const skills = [
    "React",
    "Laravel",
    "TailwindCSS",
    "JavaScript",
    "MySQL",
    "Node.js",
    "Git",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-gray-900/50 z-50 shadow-lg">
        <ul className="flex justify-center gap-8 py-4 text-sm uppercase tracking-widest">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
<section
  id="home"
  className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/omosh.jpeg')", 
  }}
>
  <div className="absolute inset-0 bg-black/70" /> {/* overlay for readability */}

  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Hey, I’m <span className="text-cyan-400">Samuel Odhiambo</span> 👋
    </h1>
    <p className="text-gray-300 max-w-lg mb-8">
      A passionate full-stack developer creating visually appealing and
      high-performing web applications with React, Laravel, and TailwindCSS.
    </p>
    <motion.a
      href="#projects"
      whileHover={{ scale: 1.05 }}
      className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-white font-semibold transition"
    >
      View My Work 🚀
    </motion.a>
  </motion.div>
</section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20"
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 text-center bg-gray-900/40">
        <h2 className="text-3xl font-bold mb-10">Skills & Tools</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-cyan-500 hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      {/* Contact Section */}
<section
  id="contact"
  className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
>
  <h2 className="text-4xl font-bold mb-6">Contact Me 📞</h2>
  <p className="text-gray-300 mb-8 text-center max-w-md">
    Feel free to reach out for collaborations, freelance work, or just to say hi!
  </p>

  <div className="space-y-4 text-center">
    <p>
      📧 <span className="font-semibold">samomondi87@gmail.com</span>
    </p>
    <p>
      💬{" "}
      <a
        href="https://wa.me/254795503862" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline"
      >
        WhatsApp Me: +254795503862
      </a>
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Samuel Odhis. All rights reserved.
      </footer>
    </div>
  );
}