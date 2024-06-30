import { useEffect, useRef, useState } from "react";
import { wallpaper } from "./lib/services/wallpaper.service";
import { DoorOpen, Maximize2, Minimize2 } from "lucide-react";
import LogoHeader from "./components/fragments/LogoHeader";
import GalleryExpanded from "./components/fragments/galleryExpanded";
import Background from "./components/fragments/background";
import Typed from "typed.js";
import lazySizes from "lazysizes";

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
    <div className={`w-full h-screen p-1  `}>
      <Background
        src={wallpaper[currentImage]?.image}
        fadeOut={fadeOut}
        alt={wallpaper[currentImage]?.title}
      />

      <main
        className={`${
          wallpaper[currentImage]?.border
        } relative w-full max-w-[1024px] h-[550px] mt-5 m-auto border  border-y-[50px] border-x-[150px] rounded-2xl transition-all duration-1000 shadow-card  ${
          expanded ? "scale-[2] opacity-0" : "scale-100 opacity-100"
        } `}
      >
        <LogoHeader />
        <SignupAndFreeTrial />
        <YourFavorite bg={wallpaper[currentImage]?.bg} />
        <button
          onClick={() => setExpanded((expand) => !expand)}
          className={`absolute py-3 right-0 px-10  bg-cover  `}
        >
          <Maximize2 size={28} color="white" />
        </button>
        <div className="">
          <p
            ref={titleRef}
            className="inline-block absolute bg-white text-black text-[0.7rem]  font-semibold w-16 text-center   top-14 -left-24   py-1 rounded-3xl z-50"
          >
            {/* {wallpaper[currentImage]?.title} */}
          </p>
          <span
            className={`absolute left-[calc(-7rem-1px)] top-[4.3rem] z-30   w-[1.1rem] h-[0.1rem] bg-white`}
          ></span>
          <span className="absolute top-[3.9rem] z-30 left-[calc(-8rem-1px)] w-4 h-4 rounded-full bg-white" />
          <div className="absolute top-[calc(4rem+1px)] -left-[7.78rem] h-[1rem] bg-crime w-[0.4rem]" />
        </div>

        <section
          className={`absolute -left-32 top-20 flex flex-col  items-end  gap-3 h-60 scroll  w-[106px]  `}
        >
          <div className="absolute top-0 left-1 h-[23rem] bg-crime w-[0.4rem]" />
          {wallpaper.map((item, i) => {
            return (
              <div
                onClick={() => changeImage(i)}
                className="relative group "
                key={i}
              >
                <img
                  className="lazyload w-20 h-20 rounded-2xl border-2 border-white "
                  data-src={item.image}
                  alt={item.image}
                />
                <p className="absolute left-2 top-7 z-40    text-white font-bold opacity-0 group-hover:opacity-100  cursor-pointer">
                  Preview
                </p>
                <BackgroundGalleryTransparentHover />
                <CircleWithLine i={i} />
              </div>
            );
          })}
        </section>
        <div className="absolute bottom-0  -left-32">
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

const YourFavorite = ({ bg }: { bg: string }) => {
  return (
    <div className="absolute -top-10 -right-[8.7rem] text-[0.7rem] text-center">
      <p className="text-white  font-bold tracking-widest">YOUR FAVORITE</p>
      <p className={`bg-white text-black rounded-md px-2`}>DESKTOP WALLPAPER</p>
    </div>
  );
};

const SignupAndFreeTrial = () => (
  <div
    className={`absolute -top-12 -left-7  scale-75  bg-white  font-semibold text-black px-2 py-2 rounded-xl flex gap-1`}
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

const CircleWithLine = ({ i }: { i: number }) => (
  <>
    <div className="absolute top-9 left-[-1.6rem] w-4 h-4 rounded-full bg-white" />
    <div
      className={`absolute top-[2.60rem]  -left-4 flex flex-col justify-start gap-[0.1rem] `}
    >
      {Array.from({ length: i + 1 }).map((_, j) => (
        <div key={j} className={`  w-4 h-[0.1rem] bg-white`}></div>
      ))}
    </div>
  </>
);

const BackgroundGalleryTransparentHover = () => (
  <div
    className={`absolute inset-0 rounded-2xl bg-black group-hover:opacity-35 opacity-0 cursor-pointer `}
  />
);
export default App;
