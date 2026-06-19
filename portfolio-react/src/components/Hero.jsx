import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <motion.h4
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, It's Me 👋
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Methni Wanigarathna
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          And I'm a <span><TypingText /></span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passionate Software Engineering undergraduate at NSBM Green
          University with hands-on experience in Full Stack Development,
          Flutter, Firebase, React, Artificial Intelligence and Cloud-based
          technologies.
        </motion.p>

        <div className="socials">
          <a
            href="https://www.facebook.com/share/1B5snZFgjB/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/methu_wanigarathna"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/methni-manarandi-196465270"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/Methni0616"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        <div className="hero-buttons">
          <a href="#about" className="btn">
            About Me
          </a>

          <a
            href="/Methni_Wanigarathna_CV.pdf"
            download
            className="btn btn-outline"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="glow-circle">
          <img src={profile} alt="Methni Wanigarathna" />
        </div>
      </div>
    </section>
  );
}

export default Hero;