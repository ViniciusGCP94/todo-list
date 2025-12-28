import React from "react";
import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import  {categories}  from "../../constants/categories";


function Header ({onAddTask}) {
    const [taskInput, setTaskInput] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('Geral');

    const handleAdd = () => {
        if (taskInput.trim() === '') return;

        onAddTask(taskInput, selectedCategory);
        setTaskInput('');
    };

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
            <div className="flex w-full justify-between items-center py-1.5 px-2 bg-indigo-950 border-2 border-gray-50/20 gap-2 rounded-full shadow-2xl">
                <input 
                    type="text"
                    placeholder="Adicionar Item"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className="flex-1 bg-transparent pl-3 text-gray-50 text-lg focus:outline-none placeholder:text-gray-500"
                />
                
                <div className="relative flex items-center">
                    <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="appearance-none bg-indigo-900/50 hover:bg-indigo-800 text-sm text-white py-1.5 pl-3 pr-8 border border-gray-50/10 rounded-full cursor-pointer transition-all focus:ring-1 focus:ring-sky-500 outline-none"
                    >
                        {categories.map(cat => (
                            <option 
                            key={cat.id} 
                            value={cat.id} 
                            className="bg-indigo-950 text-white py-2">
                                {cat.label}
                            </option>
                        ))}
                    </select>
                    
                    <div className="pointer-events-none absolute right-3 flex items-center text-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                
                <button 
                    type="submit"
                    onClick={handleAdd}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold hover:bg-sky-500 hover:scale-105 active:scale-95 transition-all shadow-lg"
                > + </button>
            </div>
            
        </header>
    );
}

export default Header;