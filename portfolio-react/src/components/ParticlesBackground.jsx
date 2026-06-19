import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 50
          },
          size: {
            value: 2
          },
          move: {
            enable: true,
            speed: 1
          }
        }
      }}
    />
  );
}