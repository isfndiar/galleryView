import { useEffect, useState } from "react";
import { wallpaper } from "./lib/services/wallpaper.service";
import { DoorOpen, Maximize2, Minimize2 } from "lucide-react";
import LogoHeader from "./components/fragments/LogoHeader";
import GalleryExpanded from "./components/fragments/galleryExpanded";
import Background from "./components/fragments/background";

function App() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [nextImage, setNextImage] = useState<number | null>(null);
  const [title, setTitle] = useState<string | undefined>("");
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

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
        setFadeOut(false);
        setCurrentImage(nextImage);
        setNextImage(null);
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [nextImage]);

  // useEffect(() => {
  //   wallpaper.find(id => )
  //   setTitle()
  // },[])

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
        <p className="bg-black">{wallpaper[currentImage]?.title}</p>
        <button
          onClick={() => setExpanded((expand) => !expand)}
          className={`absolute py-3 right-0 px-10  bg-cover  `}
        >
          <Maximize2 size={28} color="white" />
        </button>
        <section
          className={`absolute -left-32 top-20 flex flex-col items-end gap-3 h-64 scroll w-[106px]  `}
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
                  className="w-20 h-20 rounded-2xl border-2 border-white "
                  src={item.image}
                  alt={item.image}
                />
                <p className="absolute left-2 top-7 z-40   text-white font-bold opacity-0 group-hover:opacity-100  cursor-pointer">
                  Preview
                </p>
                <div
                  className={`absolute inset-0 rounded-2xl bg-black group-hover:opacity-35 opacity-0 cursor-pointer `}
                />
                <div className="absolute top-9 left-[-1.6rem] w-4 h-4 rounded-full bg-white" />
                <div
                  className={`absolute top-[2.60rem]  -left-4 flex flex-col justify-start gap-[0.1rem] `}
                >
                  {Array.from({ length: i + 1 }).map((_, j) => (
                    <div key={j} className={`  w-4 h-[0.1rem] bg-white`}></div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* button is expanded */}
      <button
        onClick={() => setExpanded((expand) => !expand)}
        className={`absolute py-3 right-0 top-0 px-10 duration-700 transition-all  ${
          expanded
            ? "opacity-100"
            : "opacity-0 -translate-y-12 translate-x-40  origin-top-right"
        }  `}
      >
        <Minimize2 size={28} color="white" />
      </button>
      {/* gallery bottom */}
      <GalleryExpanded
        expanded={expanded}
        onClick={changeImage}
        wallpaper={wallpaper}
      />
    </div>
  );
}

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

export default App;
