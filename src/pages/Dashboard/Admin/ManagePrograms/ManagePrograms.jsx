import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Spinner from "../../../../components/Spinner";
import ProgramRow from "./ProgramRow";
import FeedbackModal from "./FeedbackModal";
import { Helmet } from "react-helmet-async";

const ManagePrograms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [refreshPrograms, setRefreshPrograms] = useState(false);
  const [feedbackProgramId, setFeedbackProgramId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/programs`)
      .then((response) => {
        setPrograms(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching programs:", error);
        setIsLoading(false);
      });

    setRefreshPrograms(false);
  }, [refreshPrograms]);

  const hasPrograms =
    programs && Array.isArray(programs) && programs.length > 0;

  return (
    <>
      <Helmet>
        <title>LinguaEase | Manage Programs</title>
      </Helmet>

      <div className="p-12">
        <SectionTitle label={"All Programs"} />

        {isLoading ? (
          <Spinner />
        ) : hasPrograms ? (
          <>
            <div className="w-max mx-auto">
              <div className="overflow-x-auto">
                <table className="relative overflow-x-auto w-full my-10 shadow">
                  <thead className="font-inter tracking-wide font-medium">
                    <tr>
                      <td className="rounded-tl-2xl bg-gray-200 text-left p-3 lg:p-6">
                        Sl
                      </td>
                      <td className="p-3 lg:p-6 bg-gray-200 text-left">
                        Image
                      </td>
                      <td className="p-3 lg:p-6 bg-gray-200 text-left">Name</td>
                      <td className="p-3 lg:p-6 bg-gray-200 text-left">
                        Instructor Name
                      </td>
                      <td className="p-3 lg:p-6 bg-gray-200 text-left">
                        Instructor Email
                      </td>
                      <td className="p-3 lg:p-6 bg-gray-200 text-left">
                        Seats
                      </td>
                      <td className="p-3 lg:p-6 bg-gray-200 text-left">
                        Price
                      </td>
                      <td className="p-3 lg:p-6 rounded-tr-2xl bg-gray-200 text-left">
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
                        setRefreshPrograms={setRefreshPrograms}
                        setIsOpen={setIsOpen}
                        setFeedbackProgramId={setFeedbackProgramId}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "No programs Found"
        )}
      </div>

      <FeedbackModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        feedbackProgramId={feedbackProgramId}
      />
    </>
  );
};

export default ManagePrograms;
