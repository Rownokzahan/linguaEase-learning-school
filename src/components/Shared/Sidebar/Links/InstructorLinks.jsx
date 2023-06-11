import ActiveLink from "../ActiveLink";
import { SiGoogleclassroom } from "react-icons/si"
import { FaChalkboardTeacher } from "react-icons/fa"

const InstructorLinks = () => {
    return (
      <>
        <ActiveLink
          to={"/dashboard/add-program"}
          icon={SiGoogleclassroom}
          label={"Add Program"}
        />
        <ActiveLink
          to={"/dashboard/my-programs"}
          icon={FaChalkboardTeacher}
          label={"My Programs"}
        />
      </>
    );
};

export default InstructorLinks;