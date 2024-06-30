import { BackgroundProps } from "../../lib/types";

const Background = (props: BackgroundProps) => {
  const { src, fadeOut, alt } = props;
  return (
    <img
      src={src}
      className={`fixed inset-0 w-full h-screen object-cover transition-all duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } `}
      alt={`${alt}`}
    />
  );
};

export default Background;
