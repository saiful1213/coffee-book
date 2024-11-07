import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
}
    from "../ui/sheet";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between py-5 px-2 max-w-7xl mx-auto items-center">
            {/* nav start */}
            <Link to={'/'}><h1 className="order-2 md:order-1 text-3xl font-bold">Coffee Book</h1></Link>
            {/* nav center */}
            {/* large device */}
            <div className="hidden md:order-2 md:flex">
                <NavLinks isSmallDevie={false}></NavLinks>
            </div>
            {/* small device */}
            <div className="order-1 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline"><Menu /></Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold">
                                Coffee Book
                            </SheetTitle>
                            <SheetDescription>
                                description
                            </SheetDescription>
                            <NavLinks isSmallDevie={true}></NavLinks>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar;