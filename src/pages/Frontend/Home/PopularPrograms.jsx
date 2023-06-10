import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "../../../components/cards/ProgramCard";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import useUserRole from "../../../hooks/useUserRole";
import Spinner from "../../../components/Spinner";

const PopularPrograms = () => {
  const [isProgramsLoading, setIsProgramsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [userRole, isUserRoleLoading] = useUserRole();

  useEffect(() => {
    const fetchPopularPrograms = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/programs/popular`
        );
        setPrograms(response.data);
        setIsProgramsLoading(false);
      } catch (error) {
        console.log(error);
        setIsProgramsLoading(false);
      }
    };

    fetchPopularPrograms();
  }, []);

  const isLoading = isUserRoleLoading || isProgramsLoading;
  const hasPrograms =
    programs && Array.isArray(programs) && programs.length > 0;

  return (
    <Container>
      <SectionTitle label="Popular Programs" />

      {isLoading ? (
        <Spinner fullscreen={false} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hasPrograms &&
            programs.map((program) => (
              <ProgramCard
                key={program._id}
                program={program}
                userRole={userRole}
              />
            ))}
        </div>
      )}
    </Container>
  );
};

export default PopularPrograms;
