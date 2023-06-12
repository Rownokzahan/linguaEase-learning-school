import { Fade } from "react-awesome-reveal";
import Container from "../../../components/Container";
import image from "../../../assets/images/sign-in.avif";

const WhyUs = () => {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between  border-4 border-dashed p-8 md:p-16">
          <div>
            <Fade triggerOnce>
              <h2 className="text-4xl font-bold font-signika mb-6">
                Why Choose Us?
              </h2>
            </Fade>
            <Fade delay={300} triggerOnce>
              <ul>
                <li className="mb-2">
                  <span className="font-medium mr-2">1.</span> Experienced and
                  Qualified Instructors Providing Expert Guidance and Support
                  Throughout Your Learning Journey
                </li>
                <li className="mb-2">
                  <span className="font-medium mr-2">2.</span>{" "}
                  Industry-Recognized Certifications to Enhance Your Skills and
                  Increase Your Career Opportunities
                </li>
                <li className="mb-2">
                  <span className="font-medium mr-2">3.</span> Flexible Learning
                  Options to Fit Your Schedule and Learning Style
                </li>
                <li className="mb-2">
                  <span className="font-medium mr-2">4.</span> Engage in
                  Hands-on Training and Real-world Projects to Apply Your
                  Knowledge
                </li>
                <li className="mb-2">
                  <span className="font-medium mr-2">5.</span> Personalized
                  Career Guidance to Help You Navigate Your Career Path and Make
                  Informed Decisions
                </li>
                <li className="mb-2">
                  <span className="font-medium mr-2">6.</span> Join Our Global
                  Network of Successful Alumni and Expand Your Professional
                  Connections
                </li>
              </ul>
            </Fade>
            <Fade delay={600} triggerOnce>
              <button className="bg-accent_2 text-white px-4 py-2 mt-4 rounded">
                Learn More
              </button>
            </Fade>
          </div>
          <Fade direction="right" triggerOnce>
            <div>
              <img
                src={image}
                alt="Why Choose Us"
                className="rounded-full lg:h-96"
              />
            </div>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
