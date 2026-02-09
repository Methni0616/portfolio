import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profile} alt="Methni" className="profile-img" />
      <h1>Hi, I'm <span>Methni</span></h1>
      <p>Software Engineering Undergraduate</p>
      <a href="#projects" className="btn">View My Work</a>
    </section>
  );
}

export default Hero;
