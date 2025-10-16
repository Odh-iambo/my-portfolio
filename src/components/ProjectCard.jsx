import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, tech, live, code }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover opacity-90 hover:opacity-100 transition"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-md border border-cyan-400/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}