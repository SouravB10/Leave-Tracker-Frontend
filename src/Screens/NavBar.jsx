import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-purple-500 p-4 border-gray-100 dark:bg-purple-500 dark:border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-lg">Leave Tracker</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li className="text-white font-bold cursor-pointer">Login</li>
                    <li className="text-white font-bold cursor-pointer">Register</li>
                    <li className="text-white font-bold cursor-pointer">Profile</li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-purple-600 p-4 rounded-lg shadow-lg">
                    <ul>
                        <li className="text-white font-bold py-2 cursor-pointer border-b border-purple-400">Login</li>
                        <li className="text-white font-bold py-2 cursor-pointer border-b border-purple-400">Register</li>
                        <li className="text-white font-bold py-2 cursor-pointer">Profile</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
