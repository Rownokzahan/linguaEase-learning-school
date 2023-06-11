import { MdEditNote } from "react-icons/md";

const ProgramRow = ({ index, program, setFeedback, setIsOpen }) => {
  const { title, status, enrolled, feedback } = program || {};

  const statusColors = {
    pending: "bg-gray-200",
    approved: "bg-green-600 text-white",
    denied: "bg-red-500 text-white",
  };

  return (
    <>
      <tr>
        <th className="px-6 py-8">{index}</th>
        <td className="px-6 py-8">{title}</td>
        <td className="px-6 py-8">
          <span className={`px-3 py-1 rounded-3xl ${statusColors[status]}`}>
            {status}
          </span>
        </td>
        <td className="px-6 py-8">{enrolled}</td>
        <td className="px-6 py-8">
          {feedback === "N/A" ? (
            <span className="text-gray-500 text-sm">N/A</span>
          ) : (
            <button
              onClick={() => {
                setFeedback(feedback);
                setIsOpen(true);
              }}
              className={`px-3 py-1 rounded bg-blue-500 text-white font-medium `}
            >
              view
            </button>
          )}
        </td>
        <td className="px-6 py-8">
          <button className="text-accent_2 text-2xl">
            <MdEditNote />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProgramRow;
