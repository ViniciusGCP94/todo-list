import React from "react";
import { LuTrash2 } from "react-icons/lu";

const TaskItem = ({task, onDelete, onComplete}) => {
    return(
        <div className="flex items-center justify-between bg-indigo-950 py-2 px-4 rounded-xl border border-gray-500 shadow-lg mb-3">
            <div className="flex items-center gap-3 justify-between">
                <input type="checkbox" 
                    checked={task.completed}
                    onChange={() => onComplete(task.id)}
                    className="task-checkbox w-7 h-7 appearance-none border-2 rounded-full border-gray-50 bg-gray-50 checked:bg-green-200 checked:border-green-200 relative"
                />
                <span className={`text-gray-100 text-xl font-medium transition-all ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-100'
                }`}>
                {task.text}</span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-2 cursor-pointer"
                title="Excluir tarefa"
            >
                <LuTrash2 size={20} />
            </button>
            
        </div>
    );
};

export default TaskItem;