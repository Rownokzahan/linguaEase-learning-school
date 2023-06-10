import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "../../../components/cards/InstructorCard";
import Spinner from "../../../components/Spinner";

const Instructors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/instructors`
        );
        setInstructors(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching instructors:", error);
        setIsLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  const hasInstructors =
    instructors && Array.isArray(instructors) && instructors.length > 0;

  return (
    <Container>
      <SectionTitle label={"All Instructors"} />

      {isLoading ? (
        <Spinner fullscreen={false} />
      ) : hasInstructors ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
      ) : (
        "No instructors found"
      )}
    </Container>
  );
};

export default Instructors;
