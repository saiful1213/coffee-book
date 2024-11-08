import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div className="h-20">
                <div className="border-b fixed w-full bg-white/30 z-50 backdrop-blur-xl top-0">
                    <Navbar />
                </div>
            </div>
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-220px)]">
                <Outlet />
            </div>
            <Footer />
            
            <Toaster />
        </>
    )
}

export default MainLayout;