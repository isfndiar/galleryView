import { DownloadIcon, Star } from "lucide-react";
import { WallpaperProps } from "../../lib/types";

function DownloadComponent(props: {
  wallpaper: WallpaperProps;
  currentImage: number;
}) {
  const { currentImage, wallpaper } = props;
  return (
    <>
      <div
        className={`md:scale-100 scale-[0.5] absolute  -right-24 md:-right-20 -bottom-10 md:-bottom-4  ${wallpaper[currentImage]?.bg} transition-all duration-1000 w-72 h-36 rounded-full py-2 px-4  `}
      >
        <main className=" border-crime border-4 h-full w-full rounded-full  py-3 px-5">
          <section className="flex gap-1 px-1">
            <div className=" text-center">
              <p className={` cursor-pointer text-white font-bold text-sm `}>
                Download Now!
              </p>
              <p className="   text-black text-3xl font-bold pointer-events-none ">
                100K+
              </p>
              <p className="  text-black text-sm font-bold pointer-events-none">
                USERS
              </p>
            </div>
            <div>
              <div className=" cursor-pointer  border-2 border-crime rounded-full py-2 px-7 mb-1">
                <DownloadIcon />
              </div>
              <div className="border flex items-center px-2 py-1 rounded-md border-crime">
                <div className="flex">
                  {new Array(5).fill("").map((_, i) => (
                    <Star key={i} fill="white" size={6} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="flex  text-center text-xs justify-center items-center">
            <p className="pointer-events-none">Avaible on the platform</p>
            <img width={20} src={`/linux.svg`} />
            <img width={20} src={`/logo-google-playstore.svg`} />
            <img width={20} src={`/macos.svg`} />
          </section>
        </main>
      </div>
    </>
  );
}

export default DownloadComponent;
