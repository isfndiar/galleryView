import { WallpaperProps } from "../../lib/types";

function SatisfiyEyes(props: {
  wallpaper: WallpaperProps;
  currentImage: number;
}) {
  const { currentImage, wallpaper } = props;
  return (
    <>
      <div className="w-16 md:w-24 absolute -bottom-16 md:bottom-0 -left-12 md:-left-32 px-2 py-1">
        <img src="star.png" alt="" className="w-full" />
      </div>
      <section
        className={`absolute bottom-9 md:bottom-12  -left-11   ${wallpaper[currentImage]?.bg} transition-all duration-1000 p-2 rounded-3xl`}
      >
        <p
          className={` font-semibold text-xs md:text-lg tracking-widest  bg-white text-black py-1 px-4 rounded-3xl`}
        >
          Satisfy Your Eyes
        </p>
      </section>
      <section
        className={`absolute -bottom-1 -left-11 ${wallpaper[currentImage]?.bg} p-2 rounded-3xl transition-all duration-1000`}
      >
        <p
          className={` font-semibold text-xs md:text-lg tracking-widest  bg-white text-black py-1 px-4 rounded-3xl`}
        >
          With {wallpaper[currentImage]?.title} App
        </p>
      </section>
    </>
  );
}

export default SatisfiyEyes;
