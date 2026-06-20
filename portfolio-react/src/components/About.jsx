function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        Passionate Software Engineering undergraduate at
        <span> NSBM Green University</span> with a strong interest in software
        development, problem-solving, and creating innovative digital solutions.
        I enjoy building responsive web and mobile applications that provide
        meaningful user experiences.
      </p>

      <p className="about-text">
        Experienced in Full Stack Development using React, Node.js, JavaScript,
        Java, Flutter, and MySQL. I have worked on academic and personal
        projects involving web applications, mobile apps, API integration,
        authentication systems, and modern UI design.
      </p>

      <p className="about-text">
        Currently seeking internship opportunities to expand my technical
        expertise, contribute to real-world software projects, and grow as a
        future Software Engineer. I am a fast learner, team player, and
        passionate about continuously improving my development skills.
      </p>

      <div className="education-box">
        <h3 className="education-title">Education</h3>

        <div className="education-item">
          <div className="education-header">
            <h4>BSc (Hons) in Software Engineering</h4>
            <span>2023 - Present</span>
          </div>
          <p>NSBM Green University</p>
          <p>Current GPA: 3.48 / 4.00</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h4>Diploma in Information Technology</h4>
            <span>2023 - 2024</span>
          </div>
          <p>Esoft Metro Campus</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h4>Diploma in English</h4>
            <span>2023 - 2024</span>
          </div>
          <p>Esoft Metro Campus</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h4>Diploma in Psychology & Counselling</h4>
            <span>2026 - Present</span>
          </div>
          <p>IMBS Green Campus</p>
        </div>
      </div>
    </section>
  );
}

export default About;
