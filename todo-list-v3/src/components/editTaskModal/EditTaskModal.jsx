import React from 'react'
import { useState } from 'react';
import { LuChevronDown } from "react-icons/lu";
import {categories}  from "../../constants/categories";


const EditTaskModal = ({ task, category, text, isOpen, isClose, updateTask}) => {
    const [tempText, setTempText] = useState(text);
    const [tempCategory, setTempCategory] = useState(category);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
                    <div className="w-full flex flex-wrap justify-between gap-6 bg-indigo-900 p-2 rounded-lg md:w-1/2 lg:h-48 lg:gap-2 lg:p-4">
                        <h2 className="text-xl font-bold lg:w-full">Edite sua Tarefa</h2>
                        <div className="w-full border-gray-100 flex justify-between lg:w-2/3">
                            <textarea 
                            type="text"
                            value={tempText}
                            onChange={(e) => setTempText(e.target.value)} 
                            className="w-full text-lg border-2 rounded bg-indigo-950 lg:h-auto"
                            />
                        </div>
                        
                        <div className="w-full flex justify-between md:items-end lg:flex-col lg:w-1/4">
                            <div className="relative flex bg-indigo-900 pr-2 hover:bg-indigo-950 transition-all lg:items-center lg:pl-0 lg:pr-0">
                                <select
                                    value={tempCategory}
                                    onChange={(e) => setTempCategory(e.target.value)}
                                    className="w-full bg-indigo-900 focus:bg-indigo-950 text-white text-left lg:py-1 pl-2 pr-6 rounded-lg border-2 appearance-none cursor-pointer focus:outline-none all-transition"
                                >
                                    {categories.map(cat => (
                                        <option 
                                        key={cat.id} 
                                        value={cat.id} 
                                        className="bg-indigo-950 text-white border-2 border-amber-50">
                                            {cat.id}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-4 md:top-1 pointer-events-none text-gray-400">
                                    <LuChevronDown size={20} />
                                </div>
                            </div>
                            <div className="flex justify-end gap-1 mt-5 md:mt-2">
                                <button
                                onClick={() => isClose(false)}
                                className="px-2 py-.25 border-2 rounded bg-indigo-700">
                                    Cancelar
                                </button>
                                <button
                                onClick={() => {updateTask(task.id, tempText, tempCategory); isClose(false); }}
                                className="text-center appearance-none px-2 py-.25 flex justify-center bg-indigo-700 border-2 rounded w-auto cursor-pointer">
                                    Salvar
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
  )
}

export default EditTaskModal