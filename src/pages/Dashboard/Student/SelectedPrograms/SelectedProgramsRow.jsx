import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const SelectedProgramsRow = ({ index, selectedProgram, refetch }) => {
  const { title, instructor, duration, price } =
    selectedProgram.program || {};
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = () => {
    axiosSecure
      .delete(`/selected-programs/${selectedProgram._id}`)
      .then((res) => {
        if (res?.data?.deletedCount) {
          refetch();
          toast.success("Successfully Deleted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <tr>
        <th className="px-6 py-8">{index}</th>
        <td className="px-6 py-8">{title}</td>
        <td className="px-6 py-8">{instructor}</td>
        <td className="px-6 py-8">{duration} weeks</td>
        <td className="px-6 py-8">${price}</td>

        <td className="px-8 py-8">
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete()}
              className="bg-red-600 p-2 rounded"
            >
              <BiTrash className="text-xl text-white" />
            </button>

            <Link
              to={`/dashboard/payment/${selectedProgram._id}`}
              className="bg-accent_2 font-medium py-2 px-4 rounded"
            >
              Enroll
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SelectedProgramsRow;
