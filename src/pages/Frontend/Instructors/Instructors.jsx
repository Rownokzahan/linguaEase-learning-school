import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "../../../components/cards/InstructorCard";

const Instructors = () => {
      const [instructors, setInstructors] = useState([]);
      useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/instructors`)
          .then((res) => {
            setInstructors(res?.data);
          });
      }, []);
    
    return (
      <Container>
        <SectionTitle label={"All Instructors"} />

        {instructors &&
        Array.isArray(instructors) &&
        instructors?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors?.map((instructor) => (
              <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
          </div>
        ) : (
          "No Instructor found"
        )}
      </Container>
    );
};

export default Instructors;