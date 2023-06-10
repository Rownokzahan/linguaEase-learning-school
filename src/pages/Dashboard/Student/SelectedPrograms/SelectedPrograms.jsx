import SectionTitle from "../../../../components/SectionTitle";
import Spinner from "../../../../components/Spinner";
import useSelectedProgram from "../../../../hooks/useSelectedProgram";
import SelectedProgramsRow from "./SelectedProgramsRow";

const SelectedPrograms = () => {
  const [programs, isLoading, refetch] = useSelectedProgram();

  const hasPrograms =
    programs && Array.isArray(programs) && programs.length > 0;

  return (
    <>
      <div className="p-12">
        <SectionTitle label={"Selected programs"} />

        {isLoading ? (
          <Spinner />
        ) : hasPrograms ? (
          <>
            <div className="w-max mx-auto">
              <div className="overflow-x-auto">
                <table className="relative overflow-x-auto w-full my-10">
                  <thead className="font-inter tracking-wide font-medium">
                    <tr>
                      <td className="rounded-tl-2xl bg-gray-300 text-left py-5 px-8">
                        Sl
                      </td>
                      <td className="bg-gray-300 text-left py-5 px-6">Name</td>
                      <td className="bg-gray-300 py-5 px-6 text-left">
                        Instructor
                      </td>
                      <td className="bg-gray-300 py-5 px-6 text-left">
                        Duration
                      </td>
                      <td className="bg-gray-300 py-5 px-6 text-left">Fee</td>
                      <td className="rounded-tr-2xl bg-gray-300 py-5 px-6 text-left">
                        Action
                      </td>
                    </tr>
                  </thead>

                  <tbody className="divide-y-2">
                    {programs?.map((program, index) => (
                      <SelectedProgramsRow
                        key={program._id}
                        selectedProgram={program}
                        index={index + 1}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "No Data Found"
        )}
      </div>
    </>
  );
};

export default SelectedPrograms;
