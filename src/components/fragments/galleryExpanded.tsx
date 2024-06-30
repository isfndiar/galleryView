import { Minimize2 } from "lucide-react";
import { GalleryExpandedProps } from "../../lib/types";

const GalleryExpanded = (props: GalleryExpandedProps) => {
  const { expanded, wallpaper, onClick, expandedClick } = props;
  return (
    <>
      <button
        onClick={expandedClick}
        className={`absolute py-3 right-0 top-0 px-10 duration-700 transition-all  ${
          expanded
            ? "opacity-100"
            : "opacity-0 -translate-y-12 translate-x-40  origin-top-right"
        }  `}
      >
        <Minimize2 size={28} color="white" />
      </button>
      <section
        className={`absolute flex justify-center gap-3  bottom-0 pb-4 w-full text-center      ${
          expanded ? "animate-showBottom" : "animate-hiddenBottom"
        }  text-center`}
      >
        {expanded &&
          wallpaper.map((item, i) => {
            return (
              <img
                className={`w-14 h-14 border border-white rounded-md cursor-pointer transition-transform duration-500  hover:-translate-y-2 `}
                onClick={() => onClick(i)}
                key={i}
                src={item.image}
                alt={item.image}
              />
            );
          })}
      </section>
    </>
  );
};
export default GalleryExpanded;
