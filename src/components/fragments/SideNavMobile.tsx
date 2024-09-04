import { WallpaperProps } from "../../lib/types";

type SideNavbarImageProps = {
  wallpaper: WallpaperProps;
  changeImage: (i: number) => void;
  currentImage?: number;
};

const SideNavMobile = (props: SideNavbarImageProps) => {
  const { wallpaper, changeImage } = props;

  return (
    <section
      className={`w-full flex md:hidden  justify-center md:justify-stretch md:flex-col items-end  gap-3 absolute -bottom-[4rem] overflow-x-scroll  scroll`}
    >
      {wallpaper.map((item, i) => {
        return (
          <div
            onClick={() => changeImage(i)}
            className="relative group w-14 h-14 flex-shrink-0 rounded-xl border-2 border-white overflow-hidden   "
            key={i}
          >
            <img
              className="  w-full h-full object-cover object-center"
              src={item.image}
              alt={item.image}
            />
            <p className=" absolute left-2 md:top-7 top-5 z-40  text-[10px] md:text-lg  text-white font-bold opacity-0 group-hover:opacity-100  cursor-pointer">
              Preview
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default SideNavMobile;
