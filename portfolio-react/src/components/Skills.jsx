import Tilt from "react-parallax-tilt";

const skills = [
  "React.js",
  "Flutter",
  "Java",
  "Python",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Firebase",
  "MongoDB",
  "MySQL",
  "Gemini AI"
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <div className="skill-card">
              {skill}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Skills;

