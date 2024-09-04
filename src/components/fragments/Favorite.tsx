const Favorite = () => {
  return (
    <div className=" absolute -top-[1.8rem] -right-0 md:-top-10 md:-right-[8.7rem] text-[0.5rem] md:text-[0.7rem] text-center">
      <p className="text-white  font-bold tracking-widest">YOUR FAVORITE</p>
      <p className={`bg-white text-black rounded-md px-2 md:block hidden`}>
        DESKTOP WALLPAPER
      </p>
      <p className={`bg-white text-black rounded-md px-2 md:hidden block`}>
        MOBILE WALLPAPER
      </p>
    </div>
  );
};

export default Favorite;
