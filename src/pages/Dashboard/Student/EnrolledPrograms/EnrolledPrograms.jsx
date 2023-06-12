import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Spinner from "../../../../components/Spinner";
import EnrolledProgramRow from "./EnrolledProgramRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const EnrolledPrograms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get(`/enrolled-programs/${user?.email}`)
      .then((res) => {
        setPrograms(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [axiosSecure, user]);

  const hasPrograms =
    programs && Array.isArray(programs) && programs.length > 0;

  return (
    <>
      <Helmet>
        <title>LinguaEase | Enrolled Programs</title>
      </Helmet>

      <div className="p-12">
        <SectionTitle label={"Enrolled programs"} />

        {isLoading ? (
          <Spinner />
        ) : hasPrograms ? (
          <>
            <div className="w-max mx-auto">
              <div className="overflow-x-auto">
                <table className="relative overflow-x-auto w-full my-10 shadow">
                  <thead className="font-inter tracking-wide font-medium text-white">
                    <tr>
                      <td className="rounded-tl-2xl bg-accent_2 text-left py-5 px-8">
                        Sl
                      </td>
                      <td className="bg-accent_2 text-left py-5 px-6">
                        Program
                      </td>
                      <td className="bg-accent_2 py-5 px-6 text-left">
                        Instructor
                      </td>
                      <td className="bg-accent_2 py-5 px-6 text-left">
                        Duration
                      </td>
                      <td className="bg-accent_2 py-5 px-6 text-left">Fee</td>
                      <td className="rounded-tr-2xl bg-accent_2 py-5 px-6 text-left">
                        Payment ID
                      </td>
                    </tr>
                  </thead>

                  <tbody className="divide-y-2">
                    {programs?.map((program, index) => (
                      <EnrolledProgramRow
                        key={program._id}
                        enrolledProgram={program}
                        index={index + 1}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "You have not enrolled in any classes yet"
        )}
      </div>
    </>
  );
};

export default EnrolledPrograms;
