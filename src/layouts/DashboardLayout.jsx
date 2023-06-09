import { Outlet } from "react-router-dom";
import Sidebar from "../components/Shared/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    );
};

export default DashboardLayout;