import { TouchEventHandler, useEffect, useRef, useState } from "react";
import { wallpaper } from "./lib/services/wallpaper.service";
import {
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  DownloadIcon,
  Maximize2,
  Star,
} from "lucide-react";
import LogoHeader from "./components/fragments/LogoHeader";
import GalleryExpanded from "./components/fragments/galleryExpanded";
import Background from "./components/fragments/background";
import Typed from "typed.js";
import lazySizes from "lazysizes";
import { WallpaperProps } from "./lib/types";
import Swipeable from "./components/layouts/swipable";

function App() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [nextImage, setNextImage] = useState<number | null>(null);
  const [title, setTitle] = useState<string | undefined>(
    wallpaper[currentImage]?.title || "beach"
  );
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const titleRef = useRef(null);
  const changeImage = (index: number) => {
    const image = wallpaper.find((item) => item.id == index);
    setTitle(image?.title);
    if (currentImage !== index) {
      setNextImage(index);
    }
  };

  const handleRight = () => {
    if (currentImage < 3) {
      setCurrentImage((index) => index + 1);
    }
  };
  const handleLeft = () => {
    if (currentImage > 0) {
      setCurrentImage((index) => index - 1);
    }
  };

  useEffect(() => {
    if (nextImage !== null) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        setCurrentImage(nextImage);
        setFadeOut(false);
        setNextImage(null);
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [nextImage]);

  useEffect(() => {
    const typed = new Typed(titleRef.current, {
      strings: [`${title}`],
      typeSpeed: 55,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, [title]);
  useEffect(() => {
    lazySizes.init();
  }, []);

  return (
    <div
      className={`w-full h-screen md:p-1 md:block px-3 py-3  flex flex-col justify-center items-center   `}
    >
      <Background
        src={wallpaper[currentImage]?.image}
        fadeOut={fadeOut}
        alt={wallpaper[currentImage]?.title}
      />

      <main
        className={`${
          wallpaper[currentImage]?.border
        } relative w-full max-w-[1024px] h-[550px]  md:mt-5  m-auto border border-y-[2rem] border-x-[3rem]  md:border-y-[50px] md:border-x-[150px] rounded-2xl transition-all duration-1000 shadow-card  ${
          expanded ? "scale-[2] opacity-0" : "scale-100 opacity-100"
        } `}
      >
        {/* Left Side */}
        <section className="">
          <LogoHeader />
          <SignupAndFreeTrial />
          <TitleImage title={titleRef} />
          <SideNavbarImage wallpaper={wallpaper} changeImage={changeImage} />
        </section>
        {/* inside */}
        <section>
          <ChevronLeftRight handleLeft={handleLeft} handleRight={handleRight} />
          <button
            onClick={() => setExpanded((expand) => !expand)}
            className={`absolute py-3 right-0 px-10  bg-cover  `}
          >
            <Maximize2 size={28} color="white" />
          </button>
        </section>
        {/* right side */}
        <section className="hidden md:block">
          <YourFavorite />
          <SocialBadge wallpaper={wallpaper} currentImage={currentImage} />
        </section>
        {/* bottom side */}
        <section className="hidden md:block">
          <SatisfiyEyes wallpaper={wallpaper} currentImage={currentImage} />
          <DownloadComponent
            wallpaper={wallpaper}
            currentImage={currentImage}
          />
        </section>
      </main>

      {/* gallery expanded*/}
      <GalleryExpanded
        expanded={expanded}
        onClick={changeImage}
        expandedClick={() => setExpanded((expand) => !expand)}
        wallpaper={wallpaper}
      />
    </div>
  );
}

const YourFavorite = () => {
  return (
    <div className=" md:block hidden  absolute -top-10 -right-[8.7rem] text-[0.7rem] text-center">
      <p className="text-white  font-bold tracking-widest">YOUR FAVORITE</p>
      <p className={`bg-white text-black rounded-md px-2`}>DESKTOP WALLPAPER</p>
    </div>
  );
};

const SignupAndFreeTrial = () => (
  <div
    className={`hidden md:flex absolute -top-12 -left-7  scale-75  bg-white  font-semibold text-black px-2 py-2 rounded-xl  gap-1`}
  >
    <div className="bg-crime flex p-1 justify-center items-center rounded-2xl">
      <p className="text-[0.6rem] me-1">SIGN UP NOW!</p>
      <DoorOpen size={16} />
    </div>
    <div className="bg-mediumBlue p-1  rounded-2xl">
      <p className="bg-white py-1 px-1 text-[0.7rem] rounded-2xl">
        FREE TRIAL NOW!
      </p>
    </div>
  </div>
);

const SideNavbarImage = (props: {
  wallpaper: WallpaperProps;
  changeImage: (i: number) => void;
}) => {
  const { wallpaper, changeImage } = props;
  const BackgroundGalleryTransparentHover = () => (
    <div
      className={`absolute inset-0 rounded-2xl bg-black group-hover:opacity-35 opacity-0 cursor-pointer `}
    />
  );
  const CircleWithLine = ({ i }: { i: number }) => (
    <div className="hidden md:block ">
      <div className="absolute top-9 left-[-1.6rem] w-4 h-4 rounded-full bg-white" />
      <div
        className={`flex flex-col justify-start gap-[0.1rem] absolute top-[2.60rem]  -left-4  `}
      >
        {Array.from({ length: i + 1 }).map((_, j) => (
          <div key={j} className={`  w-4 h-[0.1rem] bg-white`}></div>
        ))}
      </div>
    </div>
  );
  return (
    <section
      className={`md:h-60 md:w-[106px] w-full   scroll md:bg-transparent  absolute bottom-0  md:-left-32 md:top-20 flex   md:flex-col  items-end  gap-3  overflow-x-scroll  `}
    >
      <div className="md:block hidden absolute top-0 left-1 h-[23rem] bg-crime w-[0.4rem]" />
      {wallpaper.map((item, i) => {
        return (
          <div
            onClick={() => changeImage(i)}
            className="relative group flex-shrink-0  "
            key={i}
          >
            <img
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

function SatisfiyEyes(props: {
  wallpaper: WallpaperProps;
  currentImage: number;
}) {
  const { currentImage, wallpaper } = props;
  return (
    <>
      <div className="absolute bottom-0  -left-32 px-2 py-1">
        <img src="star.png" alt="" width={80} height={80} />
      </div>
      <section
        className={`absolute bottom-12  -left-11   ${wallpaper[currentImage]?.bg} transition-all duration-1000 p-2 rounded-3xl`}
      >
        <p
          className={` font-semibold text-lg tracking-widest  bg-white text-black py-1 px-4 rounded-3xl`}
        >
          Satisfy Your Eyes
        </p>
      </section>
      <section
        className={`absolute -bottom-1 -left-11 ${wallpaper[currentImage]?.bg} p-2 rounded-3xl transition-all duration-1000`}
      >
        <p
          className={` font-semibold text-lg tracking-widest  bg-white text-black py-1 px-4 rounded-3xl`}
        >
          With {wallpaper[currentImage]?.title} App
        </p>
      </section>
    </>
  );
}

function SocialBadge(props: {
  wallpaper: WallpaperProps;
  currentImage: number;
}) {
  const { currentImage, wallpaper } = props;
  return (
    <>
      <div className="hidden md:flex flex-col items-end gap-1 absolute -right-[calc(7rem+5px)] scale-75 top-44   px-3 py-1 pt-2 bg-crime rounded-3xl text-white -rotate-90">
        <div className=" bg-red-white rounded-3xl h-2 w-5 mr-2"></div>
        <p
          className={`w-full px-2 font-bold tracking-widest rounded-3xl transition-all duration-700 ${wallpaper[currentImage]?.bg}`}
        >
          SOCIAL MEDIA
        </p>
      </div>
      <div className="hidden md:flex flex-col items-end gap-1 absolute -right-[calc(12rem+9px)] top-44 scale-75   px-3 py-1 pt-2 bg-crime rounded-3xl text-white rotate-90">
        <div className=" bg-red-white rounded-3xl h-2 w-5 mr-2"></div>
        <p
          className={`w-full px-2 font-bold tracking-widest rounded-3xl transition-all duration-700 ${wallpaper[currentImage]?.bg}`}
        >
          SOCIAL MEDIA
        </p>
      </div>
      <div className="hidden md:flex flex-col absolute -right-[5.6rem]    top-[calc(9rem+1px)] ">
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

function DownloadComponent(props: {
  wallpaper: WallpaperProps;
  currentImage: number;
}) {
  const { currentImage, wallpaper } = props;
  return (
    <>
      <div
        className={`md:block hidden absolute  -right-20 -bottom-4  ${wallpaper[currentImage]?.bg} transition-all duration-1000 w-72 h-36 rounded-full py-2 px-4  `}
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

function TitleImage({ title }: { title: React.MutableRefObject<null> }) {
  return (
    <div className="">
      <p
        ref={title}
        className="inline-block absolute bg-white text-black text-[0.7rem]  font-semibold w-16 text-center   top-14 -left-24   py-1 rounded-3xl z-50"
      ></p>
      <span
        className={`absolute left-[calc(-7rem-1px)] top-[4.3rem] z-30   w-[1.1rem] h-[0.1rem] bg-white`}
      ></span>
      <span className="absolute top-[3.9rem] z-30 left-[calc(-8rem-1px)] w-4 h-4 rounded-full bg-white" />
      <div className="absolute top-[calc(4rem+1px)] -left-[7.78rem] h-[1rem] bg-crime w-[0.4rem]" />
    </div>
  );
}
function ChevronLeftRight(props: {
  handleLeft?: () => void;
  handleRight?: () => void;
}) {
  const { handleLeft, handleRight } = props;
  return (
    <div>
      <div
        onClick={handleLeft}
        className="md:hidden flex justify-center items-center p-1 absolute left-2 top-[14rem]  cursor-pointer  bg-white rounded-full "
      >
        <ChevronLeft className=" " color="black" />
      </div>
      <div
        onClick={handleRight}
        className="md:hidden flex justify-center items-center p-1 absolute right-2 top-[14rem] cursor-pointer bg-white rounded-full "
      >
        <ChevronRight color="black" />
      </div>
    </div>
  );
}
export default App;
