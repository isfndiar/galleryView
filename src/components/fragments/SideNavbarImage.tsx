import { WallpaperProps } from "../../lib/types";
import BackgroundGalleryTransparentHover from "../ui/BackgroundTransparent";
import CircleWithLine from "../ui/CircleWithLine";

const SideNavDesktop = (props: {
  wallpaper: WallpaperProps;
  changeImage: (i: number) => void;
}) => {
  const { wallpaper, changeImage } = props;

  const StickComponent = () => (
    <div className="md:block hidden absolute top-0 left-1 h-[23rem] bg-crime w-[0.4rem]" />
  );

  return (
    <section
      className={`md:h-60 md:w-[106px] w-full hidden md:flex  justify-center md:justify-stretch md:flex-col items-end  gap-3 absolute bottom-0  md:-left-32 md:top-20 md:bg-transparent  overflow-x-scroll  scroll`}
    >
      <StickComponent />
      {wallpaper.map((item, i) => {
        return (
          <div
            onClick={() => changeImage(i)}
            className="relative group flex-shrink-0  "
            key={i}
          >
            <img
              sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
              className="md:w-full md:max-w-20 md:h-20 w-14 h-14  rounded-xl border-2 border-white "
              src={item.image}
              alt={item.image}
            />
            <p className=" absolute left-2 md:top-7 top-5 z-40  text-[10px] md:text-lg  text-white font-bold opacity-0 group-hover:opacity-100  cursor-pointer">
              Preview
            </p>
            <BackgroundGalleryTransparentHover />
            <CircleWithLine i={i} />
          </div>
        );
      })}
    </section>
  );
};

export default SideNavDesktop;
