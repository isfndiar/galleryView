import { GalleryExpandedProps } from "../../lib/types";

const GalleryExpanded = (props: GalleryExpandedProps) => {
  const { expanded, wallpaper, onClick } = props;
  return (
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
  );
};
export default GalleryExpanded;
