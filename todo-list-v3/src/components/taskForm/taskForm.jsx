import React, { useState } from 'react';
import CategorySelect from '../common/CategorySelect'; 
import { categories } from '../../constants/categories'; 

// 1. Receba o addTask como prop
const TaskForm = ({ addTask }) => { 
    const [taskInput, setTaskInput] = useState(''); 
    const [selectedCategory, setSelectedCategory] = useState('geral'); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskInput.trim()) return;
        
        // 2. Chame a função real que salva a tarefa
        addTask(taskInput, selectedCategory); 
        
        setTaskInput('');
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex w-full justify-between items-center py-1 px-1 mt-4 bg-indigo-950 border-2 border-gray-50/20 gap-2 rounded-full shadow-2xl"
        >
            <input 
                type="text" 
                placeholder="Nova tarefa..." 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="w-1/2 flex-1 bg-transparent pl-4 text-gray-50 text-lg focus:outline-none placeholder:text-gray-500" 
            />
            <div className='w-1/2 relative flex justify-end items-center gap-2 pr-1'>
                <CategorySelect 
                    selectedCategory={selectedCategory} 
                    onCategoryChange={setSelectedCategory} 
                    categories={categories}
                />
                <button 
                    type="submit"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold hover:bg-sky-500 hover:scale-110 active:scale-95 transition-all shadow-md shrink-0"
                > 
                    + 
                </button>
            </div>
        </form>
    );
};

export default TaskForm;