import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle";
import Spinner from "../../../../components/Spinner";
import UserRow from "./UserRow";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [refreshUsers, setRefreshUsers] = useState(false);

  useEffect(() => {
    axiosSecure
      .get(`/users`)
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    setRefreshUsers(false);
  }, [axiosSecure, refreshUsers]);

  const hasUsers = users && Array.isArray(users) && users.length > 0;

  return (
    <>
      <Helmet>
        <title>LinguaEase | Manage Users</title>
      </Helmet>

      <div className="p-12">
        <SectionTitle label={"All Users"} />

        {isLoading ? (
          <Spinner />
        ) : hasUsers ? (
          <>
            <div className="w-max mx-auto">
              <div className="overflow-x-auto">
                <table className="relative overflow-x-auto w-full my-10 shadow">
                  <thead className="font-inter tracking-wide font-medium">
                    <tr>
                      <td className="rounded-tl-2xl bg-gray-200 text-left py-5 px-8">
                        Sl
                      </td>
                      <td className="bg-gray-200 py-5 px-6 text-left">Name</td>
                      <td className="bg-gray-200 py-5 px-6 text-left">Email</td>
                      <td className="bg-gray-200 text-left py-5 px-6">Role</td>
                      <td className="rounded-tr-2xl bg-gray-200 py-5 px-6 text-left">
                        Action
                      </td>
                    </tr>
                  </thead>

                  <tbody className="divide-y-2">
                    {users?.map((user, index) => (
                      <UserRow
                        key={user._id}
                        user={user}
                        index={index + 1}
                        setRefreshUsers={setRefreshUsers}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "No User Found"
        )}
      </div>
    </>
  );
};

export default ManageUsers;
