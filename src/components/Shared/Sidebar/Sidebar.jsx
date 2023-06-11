import SidebarLogo from "./SidebarLogo";
import FrontendLinks from "./Links/FrontendLinks";
import AdminLinks from "./Links/AdminLinks";
import InstructorLinks from "./Links/InstructorLinks";
import StudentLinks from "./Links/StudentLinks";
import useUserRole from "../../../hooks/useUserRole";
import Spinner from "../../Spinner";
import ActiveLink from "./ActiveLink";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  const [userRole, isUserRoleLoading] = useUserRole();

  return (
    <div className="w-max min-h-screen shadow">
      <div className="pt-6 pb-6 md:pb-10">
        <SidebarLogo />
      </div>

      <div className="flex flex-col text-lg">
        <ActiveLink to={"/dashboard"} icon={RxDashboard} label={"Dashboard"} />
        {isUserRoleLoading ? (
          <Spinner fullscreen={false} />
        ) : (
          <>
            {userRole === "admin" && <AdminLinks />}
            {userRole === "instructor" && <InstructorLinks />}
            {userRole === "student" && <StudentLinks />}
          </>
        )}
      </div>

      {/* divider */}
      <div className="border-b-2 my-4 mx-2 md:mx-8"></div>
      <FrontendLinks />
    </div>
  );
};

export default Sidebar;
