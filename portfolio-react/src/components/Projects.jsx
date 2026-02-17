function Projects() {
  const projects = [
    {
      title: "Online Vehicle Auction System",
      type: "Group Project",
      description: [
        "Developed a responsive, real-time vehicle auction web application using React.js.",
        "Implemented frontend user interfaces based on provided UI/UX designs using React components and Tailwind CSS/CSS Modules.",
        "Integrated backend REST APIs using Axios with JWT-based authentication for secure user actions.",
        "Implemented real-time bidding updates and auction state changes using WebSocket client integration.",
        "Integrated frontend payment flow with Stripe escrow payment endpoints.",
        "Collaborated with a team using Git and GitHub/GitLab for version control and project coordination.",
      ],
      github: "https://github.com/VinukaThejana/velocity_frontend",
    },
    {
      title: "Food Delivery App",
      type: "Personal Project",
      description: [
        "Developed the user interface for a food delivery application, focusing on creating an intuitive and responsive design.",
        "Utilized HTML, CSS, and JavaScript to build the frontend components.",
        "Implemented features such as restaurant listings, menu navigation, and a user-friendly checkout process.",
      ],
      github: "https://github.com/Methni0616/Food-Delivery-App",
    },
    {
      title: "Pet Pal – Pet Adoption & Care Platform",
      type: "Personal Project",
      description: [
        "Developed a multi-module web application focused on pet adoption, pet care management, and pet services.",
        "Designed and implemented an intuitive and responsive user interface for different user roles.",
        "Built features such as pet listings, adoption applications, favorites, and adoption status tracking.",
        "Implemented pet care tools including pet profiles, health records, reminders, and activity tracking.",
      ],
      github: "https://github.com/Methni0616/pet_pal",
    },
    {
      title: "Point of Sale (POS) System",
      type: "Group Project",
      description: [
        "Developed a role-based Point of Sale web application supporting Admin, Cashier, and Supplier users.",
        "Implemented backend functionality using Java EE (JSP, Servlets) following the MVC architecture.",
        "Integrated MySQL database using JDBC for managing products, users, suppliers, and sales transactions.",
        "Collaborated with a team using Git and GitHub for version control and project management.",
      ],
      github: "https://github.com/dulanga1000/Point-of-Sale-System",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p className="project-type">{project.type}</p>
          <ul>
            {project.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {project.github && (
            <p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
