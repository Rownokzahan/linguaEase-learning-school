import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const FrontendLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default FrontendLayout;