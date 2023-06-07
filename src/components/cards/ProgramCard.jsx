import { IoCalendar } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";

const ProgramCard = ({ program }) => {
  const {
    title,
    displayImage,
    instructor,
    duration,
    price,
    capacity,
    enrolled,
  } = program || {};

  const availableSeats = capacity - enrolled;

  return (
    <div className="border rounded-2xl shadow group relative ">
      <div className="p-4">
        <img
          src={displayImage}
          className="object-top object-cover w-full h-52  rounded-t-2xl border"
          alt=""
        />
      </div>
      <div className="border border-dashed"></div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400">{instructor}&apos;s</p>
            <h4 className="text-xl font-semibold">{title}</h4>
          </div>
          <p className="text-2xl text-accent_2">${price}</p>
        </div>

        <div className="flex justify-between items-center border-t mt-3 pt-3">
          <p className="flex items-center gap-1">
            <IoCalendar /> {duration} weeks
          </p>
          <p className="flex items-center gap-2">
            <SiGoogleclassroom /> {availableSeats} Seats
          </p>
        </div>
      </div>
      <div className="cursor-pointer group-hover:flex duration-150 bg-gray-300 bg-opacity-30 hidden absolute inset-0 justify-center items-center rounded-2xl">
        <button className=" bg-accent_2 text-white font-semibold p-3 rounded-full ">
          <AiOutlinePlus className="text-4xl mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
