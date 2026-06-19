import { useEffect, useState } from "react";

export default function TypingText() {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "AI Enthusiast",
    "React Developer",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(words[wordIndex].slice(0, i));
      i++;

      if (i > words[wordIndex].length) {
        clearInterval(interval);

        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return <span>{text}</span>;
}