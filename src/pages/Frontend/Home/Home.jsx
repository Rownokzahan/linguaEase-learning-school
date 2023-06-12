import Banner from "./Banner/Banner";
import PopularInstructors from "./PopularInstructors";
import PopularPrograms from "./PopularPrograms";

const Home = () => {
  return (
    <>
      <div className="relative -top-10 pb-16">
        <Banner />
      </div>
      <PopularPrograms />
      <PopularInstructors />
    </>
  );
};

export default Home;
