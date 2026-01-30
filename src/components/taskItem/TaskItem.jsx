import React, { useState } from "react";
import { LuTrash2, LuPencilLine } from "react-icons/lu";
import { categories } from "../../constants/categories";
import EditTaskModal from "../editTaskModal/EditTaskModal";

function TaskItem({ task, onDelete, onComplete, updateTask }) {
    const { text, category, completed, id } = task;
    const categoryData = categories.find(cat => cat.id === category);
    
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={`flex items-center justify-between bg-indigo-950 py-2 px-4 rounded-xl border border-gray-500 shadow-lg mb-3 ${
            completed ? 'opacity-50 scale-95' : 'opacity-100'
        } ${isEditing ? 'relative z-50' : 'z-auto'}`}>
            
            <div className="flex items-center gap-3 justify-between">
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={() => onComplete(id)} 
                    className="task-checkbox w-7 h-7 appearance-none border-2 rounded-full border-gray-50 bg-gray-50 checked:bg-green-200 checked:border-green-200 relative cursor-pointer"
                />
                <span className={`text-gray-100 text-xl font-medium ${
                    completed ? 'line-through text-gray-500' : 'text-gray-100'
                }`}>
                    {text}
                </span>

                <span className={`text-[8px] px-2 py-1 border uppercase font-bold tracking-wider ${categoryData ? categoryData.color : ''}`}>
                    {category || "Geral"}
                </span>
            </div>

            <div className="flex items-center">
                <button
                    onClick={() => setIsEditing(true)}
                    className="text-gray-400 hover:text-blue-300 p-2 cursor-pointer"
                >
                    <LuPencilLine size={20} />
                </button>
                <button
                    onClick={() => onDelete(id)}
                    className="text-gray-400 hover:text-red-500 p-2 cursor-pointer"
                >
                    <LuTrash2 size={20} />
                </button>
            </div>

            <EditTaskModal
                isOpen={isEditing} 
                isClose={setIsEditing} 
                task={task} 
                updateTask={updateTask}
            />
        </div>
    );
}

export default TaskItem;