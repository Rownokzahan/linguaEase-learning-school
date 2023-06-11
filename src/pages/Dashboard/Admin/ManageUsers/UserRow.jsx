import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UserRow = ({ user, index, setRefreshUsers }) => {
  const { _id, name, email, role } = user || {};
  const [axiosSecure] = useAxiosSecure();

  const handleChangeRole = (role) => {
    axiosSecure
      .patch(`/users/${_id}`, { role })
      .then((response) => {
        if (response?.data?.modifiedCount) {
          toast.success(`Successfully changed role to ${role}`);
        }
      })
      .catch();
    setRefreshUsers(true);
  };

  return (
    <>
      <tr>
        <th className="px-6 py-8">{index}</th>
        <td className="px-6 py-8">{name}</td>
        <td className="px-6 py-8">{email}</td>
        <td className="px-6 py-8 capitalize">{role}</td>
        <td className="px-6 py-8">
          <div className="flex gap-2">
            <button
              onClick={() => handleChangeRole("instructor")}
              className="text-accent_2 border border-accent_2 font-medium px-2 py-1 rounded disabled:text-gray-300 disabled:border-gray-300"
              disabled={role === "instructor"}
            >
              Make Instructor
            </button>
            <button
              onClick={() => handleChangeRole("admin")}
              className="bg-accent_2 text-white font-medium px-2 py-1 rounded disabled:bg-gray-300"
              disabled={role === "admin"}
            >
              Make Admin
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
