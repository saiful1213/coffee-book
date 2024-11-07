import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className="border-b fixed w-full bg-white/80 z-50 backdrop-blur-xl top-0">
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-220px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;