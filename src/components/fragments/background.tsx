import { BackgroundProps } from "../../lib/types";

const Background = ({ src, alt, fadeOut }: BackgroundProps) => {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  return (
    <div>
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          className={`fixed inset-0 w-full h-full object-cover  ${
            src === imageSrc ? "fixed" : "hidden"
          }`}
          alt={alt}
          priority
        />
      ))}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Background;
