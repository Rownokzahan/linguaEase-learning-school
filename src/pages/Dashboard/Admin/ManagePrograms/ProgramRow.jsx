import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ProgramRow = ({
  index,
  program,
  setRefreshPrograms,
  setIsOpen,
  setFeedbackProgramId,
}) => {
  const {
    _id,
    displayImage,
    title,
    instructor,
    instructor_email,
    available_seats,
    price,
    status,
  } = program || {};

  const [axiosSecure] = useAxiosSecure();

  const handleChangeStatus = (status) => {
    axiosSecure
      .patch(`/programs/${_id}`, { status })
      .then((response) => {
        if (response?.data?.modifiedCount) {
          toast.success(`Successfully changed status !`);
        }
      })
      .catch();
    setRefreshPrograms(true);
  };

  return (
    <>
      <tr>
        <th className="p-3 lg:p-6">{index}</th>
        <td className="p-3 lg:p-6">
          <img src={displayImage} className="w-12 rounded" alt="" />
        </td>
        <td className="p-3 lg:p-6">{title}</td>
        <td className="p-3 lg:p-6">{instructor}</td>
        <td className="p-3 lg:p-6">{instructor_email}</td>
        <td className="p-3 lg:p-6">{available_seats}</td>
        <td className="p-3 lg:p-6">{price}</td>
        <td className="p-3 lg:p-6">
          <div className="flex flex-col text-sm font-medium text-white gap-2">
            <button
              className="bg-accent_2 px-2 py-1 rounded disabled:opacity-30"
              disabled={status !== "pending"}
              onClick={() => handleChangeStatus("approved")}
            >
              Approve
            </button>
            <button
              className="bg-red-600 px-2 py-1 rounded disabled:opacity-30"
              disabled={status !== "pending"}
              onClick={() => handleChangeStatus("denied")}
            >
              Deny
            </button>
            <button
              onClick={() => {
                setFeedbackProgramId(_id);
                setIsOpen(true);
              }}
              className="bg-primary  px-2 py-1 rounded"
            >
              Send Feedback
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProgramRow;
