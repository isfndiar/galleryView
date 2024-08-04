const LogoHeader = () => {
  return (
    <div
      className={` w-16 md:w-[100px]  absolute  -top-[1.7rem] left-0 md:-top-8 md:-left-32  `}
    >
      <img src="/logo.png" alt="" className=" w-full" />
    </div>
  );
};

export default LogoHeader;
