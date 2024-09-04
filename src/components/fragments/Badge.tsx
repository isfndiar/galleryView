import { WallpaperProps } from "../../lib/types";

function SocialBadge(props: {
  wallpaper: WallpaperProps;
  currentImage: number;
}) {
  const { currentImage, wallpaper } = props;
  return (
    <>
      <div className="flex flex-col items-end gap-1 absolute -right-28 md:-right-[calc(7rem+5px)] scale-50 md:scale-75 top-10 md:top-44   px-3 py-1 pt-2 bg-crime rounded-3xl text-white -rotate-90">
        <div className=" bg-red-white rounded-3xl h-2 w-5 mr-2"></div>
        <p
          className={`w-full px-2 font-bold tracking-widest rounded-3xl transition-all duration-700 ${wallpaper[currentImage]?.bg}`}
        >
          SOCIAL MEDIA
        </p>
      </div>
      <div className="flex flex-col items-end gap-1 absolute -right-28 md:-right-[calc(12rem+9px)] top-[14.9rem] md:top-44 scale-50 md:scale-75   px-3 py-1 pt-2 bg-crime rounded-3xl text-white rotate-90">
        <div className=" bg-red-white rounded-3xl h-2 w-5 mr-2"></div>
        <p
          className={`w-full px-2 font-bold tracking-widest rounded-3xl transition-all duration-700 ${wallpaper[currentImage]?.bg}`}
        >
          SOCIAL MEDIA
        </p>
      </div>
      <div className="flex flex-col scale-75 md:scale-100 absolute -right-11 top-28 md:-right-[5.6rem]    md:top-[calc(9rem+1px)] ">
        <img
          className="p-2 rounded-full bg-crime"
          src="instagram.svg"
          width={35}
          height={35}
          alt=""
        />
        <img
          className="p-2 rounded-full bg-crime"
          src="facebook.svg"
          width={35}
          height={35}
          alt=""
        />
        <img
          className="p-2 rounded-full bg-crime"
          src="x.svg"
          width={35}
          height={35}
          alt=""
        />
      </div>
    </>
  );
}

export default SocialBadge;
