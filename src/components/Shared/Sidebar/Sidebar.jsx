import SidebarLogo from "./SidebarLogo";
import FrontendLinks from "./Links/FrontendLinks";
import AdminLinks from "./Links/AdminLinks";
import InstructorLinks from "./Links/InstructorLinks";
import StudentLinks from "./Links/StudentLinks";

const Sidebar = () => {
  const isAdmin = false;
  const isInstructor = false;

  return (
    <div className="w-max min-h-screen shadow">
      <div className="pt-6 pb-6 md:pb-10">
        <SidebarLogo />
      </div>

      {isAdmin ? (
        <AdminLinks />
      ) : isInstructor ? (
        <InstructorLinks />
      ) : (
        <StudentLinks />
      )}

      {/* divider */}
      <div className="border-b-2 my-4 mx-2 md:mx-8"></div>

      <FrontendLinks />
    </div>
  );
};

export default Sidebar;
