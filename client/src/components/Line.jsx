import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.10;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
export default function Line() {

  const lines = [
    { x1: 0, y1: 10, x2: 740, y2: 10 },
  ];

  // Function to play the audio once
  const playAudioOnce = () => {
    // audioElement.play();
  };

  return (
    <>
      <motion.svg width="600" height="10" viewBox="0 0 740 10" initial="hidden" animate="visible">
        {lines.map((line, index) => (
          <motion.line
            key={`line-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            variants={draw}
            custom={index + 1}
            onAnimationComplete={index === lines.length - 1 ? playAudioOnce : undefined}
          />
        ))}
      </motion.svg>
    </>
  );
}