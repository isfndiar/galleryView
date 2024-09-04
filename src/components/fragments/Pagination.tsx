import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination(props: {
  handleLeft?: () => void;
  handleRight?: () => void;
}) {
  const { handleLeft, handleRight } = props;
  return (
    <div>
      <div
        onClick={handleLeft}
        className="md:hidden flex justify-center items-center p-1 absolute left-2 top-[14rem]  cursor-pointer  bg-white rounded-full "
      >
        <ChevronLeft className=" " color="black" />
      </div>
      <div
        onClick={handleRight}
        className="md:hidden flex justify-center items-center p-1 absolute right-2 top-[14rem] cursor-pointer bg-white rounded-full "
      >
        <ChevronRight color="black" />
      </div>
    </div>
  );
}
export default Pagination;
