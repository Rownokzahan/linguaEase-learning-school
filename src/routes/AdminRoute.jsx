import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinner />;
  }

  if (!user || !isAdmin) {
    return <Navigate state={{ from: location }} to={"/login"} replace={true} />;
  }

  return children;
};

export default AdminRoute;
