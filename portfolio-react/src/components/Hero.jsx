import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <motion.h4
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, It's Me
        </motion.h4>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Methni Manarandi
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          And I'm a <span>Frontend Developer</span>
        </motion.h3>

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
