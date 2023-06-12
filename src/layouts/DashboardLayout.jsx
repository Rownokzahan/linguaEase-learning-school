import { Outlet } from "react-router-dom";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import Footer from "../components/Shared/Footer/Footer";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer topMargin={"mt-0"} />
    </>
  );
};

export default DashboardLayout;
