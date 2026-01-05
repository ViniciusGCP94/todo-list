import React from 'react'
import { useState } from 'react';
import { categories } from '../../constants/categories';

function TaskForm (onAddTask) {
    const [taskInput, setTaskInput] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('Geral');

    const handleAdd = () => {
        if (taskInput.trim() === '') return;

        onAddTask(taskInput, selectedCategory);
        setTaskInput('');
    };
  return (
    <div className="flex w-full justify-between items-center py-.75 mt-4 bg-indigo-950 border-2 border-gray-50/20 gap-2 rounded-full shadow-2xl">
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

  )
}

export default TaskForm