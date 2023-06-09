import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const InstuctorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useAdmin();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <Spinner />;
  }

  if (!user || !isInstructor) {
    return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
  }

  return children;
};

export default InstuctorRoute;
