import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import InstructorCard from "../../../components/cards/InstructorCard";
import Spinner from "../../../components/Spinner";

const PopularInstructors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/instructors/popular`)
      .then((res) => {
        setInstructors(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const hasInstructors =
    instructors && Array.isArray(instructors) && instructors?.length > 0;

  return (
    <div className="mt-20 md:mt-28">
      <Container>
        <SectionTitle label={"Popular Instructors"} />

        {isLoading ? (
          <Spinner fullscreen={false} />
        ) : hasInstructors ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors?.map((instructor) => (
              <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
          </div>
        ) : (
          "No Instructor found"
        )}
      </Container>
    </div>
  );
};

export default PopularInstructors;
