import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h4>Hello, It's Me</h4>
        <h1>Methni Manarandi</h1>
        <h3>
          And I'm a <span>Frontend Developer</span>
        </h3>

        <p>
          As a Software Engineering undergraduate, I specialize in building
          modern, responsive, and user-friendly interfaces. I focus on creating
          visually appealing and interactive web experiences while continuously
          enhancing my skills in frontend technologies.
        </p>

        <div className="socials">
          <a
            href="https://www.facebook.com/share/1B5snZFgjB/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/methu_wanigarathna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/methni-manarandi-196465270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/Methni0616"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        <a href="#about" className="btn">
          More About Me
        </a>
      </div>

      <div className="hero-right">
        <div className="glow-circle">
          <img src={profile} alt="Methni Manarandi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
