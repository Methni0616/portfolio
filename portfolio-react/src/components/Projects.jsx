import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
