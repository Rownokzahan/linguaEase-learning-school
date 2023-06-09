import ActiveLink from "../ActiveLink";
import { AiOutlineHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";

const FrontendLinks = () => {
  return (
    <div className="flex flex-col text-lg">
      <ActiveLink to={"/"} icon={AiOutlineHome} label={"Home"} />
      <ActiveLink
        to={"/programs"}
        icon={GiTeacher}
        label={"Programs"}
      />
      <ActiveLink
        to={"/instructors"}
        icon={FaChalkboardTeacher}
        label={"Instructors"}
      />
    </div>
  );
};

export default FrontendLinks;
