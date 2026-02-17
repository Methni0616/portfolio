import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h4>Hello, It's Me</h4>
        <h1>Methni Manarandi</h1>
        <h3>
          And I'm a <span>Web Developer</span>
        </h3>

        <p>
          As a Software Engineering undergraduate, I create responsive and
          user-friendly web applications while continuously improving my skills
          in frontend and backend development.
        </p>

        <div className="socials">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
        </div>

        <button className="btn">More About Me</button>
      </div>

      <div className="hero-right">
        <div className="glow-circle">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
