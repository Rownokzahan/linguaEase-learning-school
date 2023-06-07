import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "../../../components/cards/ProgramCard";

const PopularPrograms = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/programs/popular`).then((res) => {
      setPrograms(res?.data);
    });
  }, []);
  return (
    <>
      {programs && Array.isArray(programs) && programs?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs?.map((program) => (
            <ProgramCard key={program._id} program={program} />
          ))}
        </div>
      ) : (
        "No programs found"
      )}
    </>
  );
};

export default PopularPrograms;
