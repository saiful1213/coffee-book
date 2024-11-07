import { Facebook, Github, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <div className="py-8 border-t border-gray-300">
            <div className="flex justify-center items-center my-3 gap-6"><Facebook /> <Youtube /> <Github /></div>
            <p className="text-center">@2025 Coffee Book All Rights Reserved.</p>
        </div>
    )
}

export default Footer;