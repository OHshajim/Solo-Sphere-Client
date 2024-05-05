import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;