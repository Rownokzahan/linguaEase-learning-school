import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const InstuctorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isUserRoleLoading] = useUserRole();
  const location = useLocation();

  if (loading || isUserRoleLoading) {
    return <Spinner />;
  }

  if (!user || userRole !== "instructor") {
    return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
  }

  return children;
};

export default InstuctorRoute;
