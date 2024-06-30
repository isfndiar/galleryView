import { useEffect } from "react";
import { BackgroundProps } from "../../lib/types";
import lazySizes from "lazysizes";

const Background = (props: BackgroundProps) => {
  const { src, fadeOut, alt } = props;
  useEffect(() => {
    lazySizes.init();
  }, []);
  return (
    <img
      data-src={src}
      className={`lazyload fixed inset-0 w-full h-screen object-cover transition-all duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } `}
      alt={`${alt}`}
    />
  );
};

export default Background;
