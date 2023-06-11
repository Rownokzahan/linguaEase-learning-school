import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    return (
      <div className="p-12">
        <h2 className="text-center text-3xl font-crimson">Welcome, {user?.displayName} !</h2>
      </div>
    );
};

export default Dashboard;