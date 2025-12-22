import React from "react";
import { useState } from 'react';
import { LuMenu } from "react-icons/lu";


const Header = ({onAddTask}) => {
    const [taskInput, setTaskInput] = useState('');

    const handleAdd = () => {
        onAddTask(taskInput);
        setTaskInput('');
    };

    return (
        <header className="header flex flex-col gap">
            <div className="flex justify-between w-full">
                <div className="header__menu-icon border rounded-lg p-0.5 ">
                    <LuMenu size={30} />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-2xl font-medium">VINNIE</span>
                </div>
            </div>
            <div class="flex w-full justify-between items-center text-2xl py-1.5 px-1 bg-indigo-950 border-2 border-gray-50 gap-1 rounded-full">
                <input type="text"
                placeholder="Adicionar Item"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}

                className="w-4/5 grow-0 pl-2 ml-1 rounded-full text-gray-50 transition-transform duration-200 ease-in-out custom-focus focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit"
                    onClick={handleAdd}
                    className="w-10 h-10 min-w-10 flex justify-center items-center rounded-full bg-sky-800 text-gray-50 border-gray-50">+</button>
            </div>
            
        </header>
    );
}

export default Header;