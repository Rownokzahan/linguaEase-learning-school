import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import SectionTitle from '../../../components/SectionTitle';
import ProgramCard from '../../../components/cards/ProgramCard';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/programs`)
      .then((res) => {
        setPrograms(res?.data);
      });
  }, []);

  return (
    <Container>
      <SectionTitle label={"All Programs"} />

      {programs && Array.isArray(programs) && programs?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs?.map((program) => (
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