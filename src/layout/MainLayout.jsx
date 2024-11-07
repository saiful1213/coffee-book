import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className="border-b">
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