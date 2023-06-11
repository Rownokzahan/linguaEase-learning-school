import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ProgramCard from "../../../components/cards/ProgramCard";
import Spinner from "../../../components/Spinner";
import useUserRole from "../../../hooks/useUserRole";

const Programs = () => {
  const [userRole, isUserRoleLoading] = useUserRole();
  const [programs, setPrograms] = useState([]);
  const [isProgramsLoading, setIsProgramsLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/programs`
        );
        setPrograms(response?.data);
        setIsProgramsLoading(false);
      } catch (error) {
        console.log("Error fetching programs:", error);
        setIsProgramsLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const isLoading = isProgramsLoading || isUserRoleLoading;
  const hasPrograms =
    programs && Array.isArray(programs) && programs.length > 0;

  return (
    <Container>
      <SectionTitle label={"All Programs"} />

      {isLoading ? (
        <Spinner fullscreen={false} />
      ) : hasPrograms ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program._id}
              program={program}
              userRole={userRole}
            />
          ))}
        </div>
      ) : (
        "No programs found"
      )}
    </Container>
  );
};

export default Programs;
