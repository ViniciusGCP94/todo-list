import React, { useState} from 'react';
import CategorySelect from '../common/CategorySelect';
import { categories } from "../../constants/categories";

const EditTaskModal = ({ task, isOpen, isClose, updateTask }) => {
    const [tempText, setTempText] = useState(task?.text || "");
    const [tempCategory, setTempCategory] = useState(task?.category || "geral");

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all">
            
            <div className="w-full max-w-lg bg-indigo-950 border border-gray-100 backdrop-blur-md p-6 rounded-4xl shadow-2xl flex flex-col gap-6 scale-in-center">
                
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Editar Tarefa</h2>
                    <button 
                        onClick={() => isClose(false)}
                        className="text-gray-400 hover:text-white transition-colors text-2xl"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-xs font-semibold text-sky-400 uppercase tracking-widest ml-1">
                        Descrição da Tarefa
                    </label>
                    <textarea 
                        value={tempText}
                        onChange={(e) => setTempText(e.target.value)} 
                        className="w-full h-32 p-4 bg-indigo-900 border-2 border-white/5 rounded-2xl text-gray-100 text-lg focus:outline-none focus:border-indigo-500 transition-all resize-none placeholder:text-gray-400"
                        placeholder="O que precisa ser feito?"
                    />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                    
                    <div className="w-full sm:w-auto">
                        <CategorySelect
                            selectedCategory={tempCategory} 
                            onCategoryChange={setTempCategory} 
                            categories={categories}
                            direction="up"
                        />
                    </div>
                    
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button 
                            onClick={() => isClose(false)} 
                            className="flex-1 sm:flex-none px-6 py-2.5 border border-white/10 rounded-full bg-white/5 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all"
                        >
                            Cancelar
                        </button>
                        <button 
                            onClick={() => { updateTask(task.id, tempText, tempCategory); isClose(false); }} 
                            className="flex-1 sm:flex-none px-8 py-2.5 rounded-full bg-indigo-800 text-white text-sm font-bold hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all"
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;