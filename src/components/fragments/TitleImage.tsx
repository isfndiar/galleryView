function TitleImage({ title }: { title: React.MutableRefObject<null> }) {
  return (
    <div className="">
      <p
        ref={title}
        className="w-20 md:w-16 py-1 px-2 md:px-0 inline-block absolute -top-7 left-[50%] right-[50%] -translate-x-11 md:translate-x-0 md:top-14 md:-left-24 bg-white text-black text-[0.7rem] font-semibold  text-center  rounded-3xl z-50"
      ></p>
      <span
        className={`hidden md:block absolute left-[calc(-7rem-1px)] top-[4.3rem] z-30   w-[1.1rem] h-[0.1rem] bg-white`}
      ></span>
      <span className="hidden md:block absolute top-[3.9rem] z-30 left-[calc(-8rem-1px)] w-4 h-4 rounded-full bg-white" />
      <div className="hidden md:block absolute top-[calc(4rem+1px)] -left-[7.78rem] h-[1rem] bg-crime w-[0.4rem]" />
    </div>
  );
}

export default TitleImage;
