import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { wallpaper } from "./lib/services/wallpaper.service";
import { Maximize2 } from "lucide-react";
import LogoHeader from "./components/fragments/LogoHeader";
import GalleryExpanded from "./components/fragments/galleryExpanded";
import Background from "./components/fragments/background";
import Typed from "typed.js";
import SignUp from "./components/fragments/SignUp";
import Favorite from "./components/fragments/Favorite";
import SideNavMobile from "./components/fragments/SideNavMobile";
import SideNavDesktop from "./components/fragments/SideNavbarImage";
import SatisfiyEyes from "./components/fragments/Satisfy";
import SocialBadge from "./components/fragments/Badge";
import DownloadComponent from "./components/fragments/Download";
import TitleImage from "./components/fragments/TitleImage";
import Pagination from "./components/fragments/Pagination";

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
      setTitle(wallpaper[currentImage + 1]?.title);
      setCurrentImage((index) => index + 1);
    }
  };
  const handleLeft = () => {
    if (currentImage > 0) {
      setTitle(wallpaper[currentImage - 1]?.title);
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

  return (
    <motion.div>
      <div
        className={`w-full md:h-screen h-full md:p-1 md:block px-3 py-3  flex flex-col justify-center items-center overflow-hidden   `}
      >
        <Background
          src={wallpaper[currentImage]?.image}
          fadeOut={fadeOut}
          alt={wallpaper[currentImage]?.title}
        />

        <main
          className={`${
            wallpaper[currentImage]?.border
          } relative w-full max-w-[1024px] h-[550px]  md:mt-5  m-auto border border-y-[2rem] border-x-[3rem] border-b-[4.5rem]  md:border-y-[50px] md:border-x-[150px] rounded-2xl transition-all duration-1000 shadow-card  ${
            expanded ? "scale-[2] opacity-0" : "scale-100 opacity-100"
          } `}
        >
          {/* Left Side */}
          <section className="">
            <LogoHeader />
            <SignUp />
            <TitleImage title={titleRef} />
            <SideNavDesktop wallpaper={wallpaper} changeImage={changeImage} />
            <SideNavMobile
              wallpaper={wallpaper}
              changeImage={changeImage}
              currentImage={currentImage}
            />
          </section>
          {/* inside */}
          <section>
            <Pagination handleLeft={handleLeft} handleRight={handleRight} />
            <button
              onClick={() => setExpanded((expand) => !expand)}
              className={`absolute py-3 right-0 px-10  bg-cover  `}
            >
              <Maximize2 size={28} color="white" />
            </button>
          </section>
          {/* right side */}
          <section className="block">
            <Favorite />
            <SocialBadge wallpaper={wallpaper} currentImage={currentImage} />
          </section>
          {/* bottom side */}
          <section className="block">
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
    </motion.div>
  );
}

export default App;
