import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>LinguaEase | Dashboard</title>
      </Helmet>
      <div className="p-12">
        <h2 className="text-center text-3xl font-crimson">
          Welcome, {user?.displayName} !
        </h2>
      </div>
    </>
  );
};

export default Dashboard;