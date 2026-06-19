function Skills() {
  const skills = [
    "React.js",
    "Flutter",
    "Java",
    "Python",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Firebase",
    "MongoDB",
    "MySQL",
    "TensorFlow Lite",
    "Gemini AI",
    "Git",
    "GitHub",
    "Figma",
    "REST APIs",
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

