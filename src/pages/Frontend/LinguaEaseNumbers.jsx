import { SlPeople } from "react-icons/sl";
import { FiBookOpen, FiMonitor, FiUser } from "react-icons/fi";
import banner from "../../assets/images/Banner/banner2.avif";
import Container from "../../components/Container";

const items = [
  {
    label: "Students",
    icon: SlPeople,
    number: 128,
  },
  {
    label: "LEARNING PROGRAMMES",
    icon: FiBookOpen,
    number: 32,
  },
  {
    label: "LANGUAGE TRAININGS",
    icon: FiMonitor,
    number: 14,
  },
  {
    label: "TEACHERS",
    icon: FiUser,
    number: 12,
  },
];

const LinguaEaseNumbers = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-fixed py-20
        md:px-10 lg:px-20 flex justify-center items-center mt-28"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Container>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white text-white bg-opacity-5 dark:bg-black dark:bg-opacity-60 shadow p-8 border dark:border-black"
            >
              <item.icon className="mx-auto text-4xl mb-8" />
              <p className="font-semibold text-3xl">{item.number}</p>
              <p className="uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LinguaEaseNumbers;
