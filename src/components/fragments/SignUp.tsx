import { DoorOpen } from "lucide-react";

const SignUp = () => (
  <div
    className={` flex absolute -top-10 -left-20 md:-top-12 md:-left-7  scale-50 md:scale-75  bg-white  font-semibold text-black px-2 py-2 rounded-xl  gap-1`}
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

export default SignUp;
