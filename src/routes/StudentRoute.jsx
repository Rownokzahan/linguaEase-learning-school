import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import Spinner from "../components/Spinner";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isUserRoleLoading] = useUserRole();
  const location = useLocation();

  if (loading || isUserRoleLoading) {
    return <Spinner />;
  }

  if (!user || userRole!== "student") {
    return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
  }

  return children;
};

export default StudentRoute;