import agrisense from "../assets/projects/agrisense.png";
import auction from "../assets/projects/auction.png";
import petpal from "../assets/projects/petpal.png";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AgriSense",
      image: agrisense,
      type: "Group Project",
      github: "#",
      description: [
        "Flutter Smart Agriculture Application",
        "AI Crop Disease Detection",
        "Gemini AI Integration",
        "Weather API Integration",
        "OTP Authentication",
      ],
    },
    {
      title: "Pet Pal",
      image: petpal,
      type: "Personal Project",
      github: "https://github.com/Methni0616/pet_pal",
      description: [
        "Pet Adoption Platform",
        "Health Records Management",
        "Vaccination Tracking",
        "Role-Based Access Control",
      ],
    },
    {
      title: "Online Vehicle Auction System",
      image: auction,
      type: "Group Project",
      github: "https://github.com/VinukaThejana/velocity_frontend",
      description: [
        "React.js Frontend Development",
        "Tailwind CSS UI Design",
        "Real-Time Bidding with WebSockets",
        "Stripe Payment Integration",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p className="project-type">{project.type}</p>

            <ul>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;