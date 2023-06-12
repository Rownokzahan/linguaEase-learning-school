import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../components/SectionTitle";
import Spinner from "../../../../components/Spinner";
import ProgramRow from "./ProgramRow";
import ViewFeedbackModal from "./ViewFeedbackModal";
import { Helmet } from "react-helmet-async";

const MyPrograms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    axiosSecure
      .get(`/programs/${user?.email}`)
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
        <title>LinguaEase | My Programs</title>
      </Helmet>

      <div className="p-12">
        <SectionTitle label={"My Programs"} />

        {isLoading ? (
          <Spinner />
        ) : hasPrograms ? (
          <>
            <div className="w-max mx-auto">
              <div className="overflow-x-auto">
                <table className="relative overflow-x-auto w-full my-10 shadow">
                  <thead className="font-inter tracking-wide font-medium">
                    <tr>
                      <td className="rounded-tl-2xl bg-gray-200 text-left py-5 px-8">
                        Sl
                      </td>
                      <td className="bg-gray-200 text-left py-5 px-6">
                        Program Name
                      </td>
                      <td className="bg-gray-200 py-5 px-6 text-left">
                        Status
                      </td>
                      <td className="bg-gray-200 py-5 px-6 text-left">
                        Enrolled Students
                      </td>
                      <td className="bg-gray-200 py-5 px-6 text-left">
                        Feedback
                      </td>
                      <td className="rounded-tr-2xl bg-gray-200 py-5 px-6 text-left">
                        Action
                      </td>
                    </tr>
                  </thead>

                  <tbody className="divide-y-2">
                    {programs?.map((program, index) => (
                      <ProgramRow
                        key={program._id}
                        program={program}
                        index={index + 1}
                        setFeedback={setFeedback}
                        setIsOpen={setIsOpen}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "You have not posted any classes yet"
        )}
      </div>

      {feedback && (
        <ViewFeedbackModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          feedback={feedback}
        />
      )}
    </>
  );
};

export default MyPrograms;
