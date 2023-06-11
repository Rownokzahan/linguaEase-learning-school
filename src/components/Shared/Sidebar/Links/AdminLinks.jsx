import { SiGoogleclassroom } from "react-icons/si";
import ActiveLink from "../ActiveLink";
import { MdOutlinePeopleAlt } from "react-icons/md";

const AdminLinks = () => {
  return (
    <>
      <ActiveLink
        to={"/dashboard/manage-programs"}
        icon={SiGoogleclassroom}
        label={"Manage Programs"}
      />
      <ActiveLink
        to={"/dashboard/manage-users"}
        icon={MdOutlinePeopleAlt}
        label={"Manage Users"}
      />
    </>
  );
};

export default AdminLinks;
