import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navabar from "../components/Shared/Navbar/Navabar";

const FrontendLayout = () => {
    return (
        <>
            <Navabar/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default FrontendLayout;