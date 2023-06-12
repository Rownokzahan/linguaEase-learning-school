import { IoCalendar } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProgramCard = ({ program, userRole }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { title, displayImage, instructor, duration, price, available_seats } =
    program || {};

  const hideButton =
    !available_seats || userRole === "admin" || userRole === "instructor";

  const handleSelectedProgram = () => {
    if (userRole === "none") {
      toast.error("You have to login first to select program");
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }

    // Save selected program to database
    const selectedProgram = { email: user?.email, programId: program?._id };
    axiosSecure
      .post(`/selected-programs`, selectedProgram)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Program selected successfully!");
        }
        if (res?.data?.message === "already exists") {
          toast.error("You have already selected this program!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`border rounded-2xl shadow group relative ${
        !available_seats && "bg-red-400"
      }`}
    >
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
            <p className="text-gray-500">{instructor}&apos;s</p>
            <h4 className="text-xl font-semibold">{title}</h4>
          </div>
          <p className="text-2xl text-accent_2">${price}</p>
        </div>

        <div className="flex justify-between items-center border-t mt-3 pt-3">
          <p className="flex items-center gap-1">
            <IoCalendar /> {duration} weeks
          </p>
          <p className="flex items-center gap-2">
            <SiGoogleclassroom /> {available_seats} Seats
          </p>
        </div>
      </div>

      {/* Add to selected programs button */}
      {!hideButton && (
        <button
          onClick={handleSelectedProgram}
          className="cursor-pointer group-hover:flex duration-150 bg-gray-300 bg-opacity-30 hidden absolute inset-0 justify-center items-center rounded-2xl"
        >
          <span className="bg-accent_2 text-white font-semibold p-3 rounded-full ">
            <AiOutlinePlus className="text-4xl mx-auto" />
          </span>
        </button>
      )}
    </div>
  );
};

export default ProgramCard;
