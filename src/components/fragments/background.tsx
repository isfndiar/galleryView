import { BackgroundProps } from "../../lib/types";
import { motion, AnimatePresence } from "framer-motion";
const Background = ({ src, alt, fadeOut }: BackgroundProps) => {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  return (
    <div>
      <AnimatePresence>
        {images.map((imageSrc, index) => (
          <motion.div
            key={index}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={imageSrc}
              sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
              className={`fixed inset-0 w-full h-full object-cover  ${
                src === imageSrc ? "fixed" : "hidden"
              }`}
              alt={alt}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Background;
