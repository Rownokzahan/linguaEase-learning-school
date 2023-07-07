import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import partner1 from "../../../assets/images/partners/partner-1.png";
import partner2 from "../../../assets/images/partners/partner-2.png";
import partner3 from "../../../assets/images/partners/partner-3.png";
import partner4 from "../../../assets/images/partners/partner-4.png";
import partner5 from "../../../assets/images/partners/partner-5.png";
import partner6 from "../../../assets/images/partners/partner-6.png";

const partnerImages = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
];

const Partners = () => {
  return (
    <div className="mt-28">
      <Container>
        <SectionTitle label="Our Partners" />
        <div className="flex gap-8 items-center flex-wrap justify-around">
          {partnerImages.map((image, index) => (
            <img key={index} src={image} alt={`Partner ${index + 1}`} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
