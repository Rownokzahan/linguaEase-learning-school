import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ProgramCard from "../../../components/cards/ProgramCard";
import Spinner from "../../../components/Spinner";

const Programs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/programs`
        );
        setPrograms(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching programs:", error);
        setIsLoading(false);
      }
    };

    fetchPrograms();
  }, []);

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
            <ProgramCard key={program._id} program={program} />
          ))}
        </div>
      ) : (
        "No programs found"
      )}
    </Container>
  );
};

export default Programs;
