import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularInstructors from "./PopularInstructors";
import PopularPrograms from "./PopularPrograms";
import WhyUs from "./WhyUs";
import Review from "./Review";
import Subscribe from "./Subscribe";
import Partners from "./Partners";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LinguaEase | Home</title>
      </Helmet>

      <div className="relative -top-10 pb-16">
        <Banner />
      </div>
      <PopularPrograms />
      <PopularInstructors />
      <WhyUs />
      <Review />
      <Subscribe />
      <Partners />
    </>
  );
};

export default Home;
