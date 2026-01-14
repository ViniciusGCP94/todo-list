import React from 'react'
import { useState } from 'react';
import { categories } from '../../constants/categories';

function TaskForm ({onAddTask}) {
    const [taskInput, setTaskInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    

    const [selectedCategory, setSelectedCategory] = useState('Geral');

    const handleAdd = () => {
        if (taskInput.trim() === '') return;

        onAddTask(taskInput, selectedCategory);
        setTaskInput('');
    };

  return (
    <div className="flex w-full justify-between items-center py-1 px-1 mt-4 bg-indigo-950 border-2 border-gray-50/20 gap-2 rounded-full shadow-2xl">
        <input 
            type="text"
            placeholder="Adicionar Item"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="w-1/2 flex-1 bg-transparent pl-2 text-gray-50 text-lg focus:outline-none placeholder:text-gray-500"
        />
        
        <div className="w-1/2 relative flex justify-end items-center">
            <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-auto min-w-30 flex items-center gap-2 bg-indigo-900/50 hover:bg-indigo-800 text-sm text-white py-1 px-1 border border-gray-50/10 rounded-full cursor-pointer transition-all focus:ring-1 focus:ring-sky-500 outline-none select-none">
                <span>{categories.find(c => c.id === selectedCategory)?.label || 'Geral'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-sky-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <ul className="absolute top-full right-5 mt-1 w-30 bg-indigo-900 border border-gray-50/20 rounded-lg shadow-lg z-10">
                    {categories.map((category) => (
                        <li 
                            key={category.id}
                            onClick={() => {setSelectedCategory(category.id);
                            setIsOpen(false);
                        }}
                            className="px-4 py-2 hover:bg-indigo-800 cursor-pointer text-gray-200 text-xs rounded-lg"
                        >
                            {category.label}
                        </li>
                    ))}
                </ul>
            )}
        
            <button 
                type="submit"
                onClick={handleAdd}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold hover:bg-sky-500 hover:scale-105 active:scale-95 transition-all shadow-lg"
            > + </button>
        </div>
    </div>

  )
}

export default TaskForm