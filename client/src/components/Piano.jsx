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
export default function Piano() {
  const rectangles = [
    { width: 60, height: 240, x: 70 },
    { width: 60, height: 240, x: 160 },
    { width: 60, height: 240, x: 340 },
    { width: 60, height: 240, x: 430 },
    { width: 60, height: 240, x: 520 },
  ];

  const lines = [
    { x1: 10, y1: 10, x2: 10, y2: 440 },
    { x1: 100, y1: 252, x2: 100, y2: 440 },
    { x1: 190, y1: 252, x2: 190, y2: 440 },
    { x1: 280, y1: 10, x2: 280, y2: 440 },
    { x1: 370, y1: 252, x2: 370, y2: 440 },
    { x1: 460, y1: 252, x2: 460, y2: 440 },
    { x1: 550, y1: 252, x2: 550, y2: 440 },
    { x1: 640, y1: 10, x2: 640, y2: 440 },
    { x1: 730, y1: 10, x2: 730, y2: 440 },
    { x1: 7.5, y1: 10, x2: 732.5, y2: 10 },
    { x1: 7.5, y1: 440, x2: 732.5, y2: 440 },
  ];

  // Function to play the audio once
  const playAudioOnce = () => {
    // audioElement.play();
  };

  return (
    <>
      <motion.svg width="600" height="600" viewBox="0 0 740 740" initial="hidden" animate="visible">
      
        {rectangles.map((rect, index) => (
          
          <motion.rect
            key={`rect-${index}`}
            width={rect.width}
            height={rect.height}
            x={rect.x}
            y={10}
            stroke="white"
            variants={draw}
            custom={index + 1}
            onAnimationComplete={index === rectangles.length - 1 ? playAudioOnce : undefined}
          />
        ))}

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