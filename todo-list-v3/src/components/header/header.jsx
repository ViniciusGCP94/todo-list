import React from "react";
import { LuMenu } from "react-icons/lu";


function Header () {
    
    return (
        <header className="header flex flex-col gap-4">
            <div className="flex justify-between w-full">
                <div className="header__menu-icon border rounded-lg p-0.5 ">
                    <LuMenu size={30} />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-2xl font-medium">VINNIE</span>
                </div>
            </div>
        </header>
    );
}

export default Header;