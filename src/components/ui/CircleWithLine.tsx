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

export default CircleWithLine;
