import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return <Navigate state={{ from: location }} to={'/login'} replace={true} />
    }

    return children;
};

export default PrivateRoute;