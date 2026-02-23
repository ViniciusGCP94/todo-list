import { useState} from 'react';
import Select from '../common/Select';
import Button from '../common/Button';
import { categories } from "../../constants/categories";
import { createPortal } from 'react-dom';

const EditTaskModal = ({ task, isOpen, isClose, updateTask }) => {
    const [tempText, setTempText] = useState(task?.text || "");
    const [tempCategory, setTempCategory] = useState(task?.category || "geral");

    if (!isOpen) return null;

    return createPortal (
        <div className="fixed inset-0 bg-indigo-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-100 transition-all">
            
            <div className="w-full max-w-lg bg-indigo-950 border border-gray-100 backdrop-blur-md p-6 rounded-4xl shadow-2xl flex flex-col gap-6 scale-in-center z-50">
                
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
                        <Select
                            selectedCategory={tempCategory} 
                            onCategoryChange={setTempCategory} 
                            categories={categories}
                            direction="up"
                        />
                    </div>
                    
                    <div className="flex gap-3 w-full sm:w-auto">
                        <Button 
                        variant="secondary" 
                        onClick={() => isClose(false)}
                        >
                        Cancelar
                        </Button>
                         
                        <Button 
                        variant="primary" 
                        hasNeon={true} 
                        onClick={() => {
                            updateTask(task.id, tempText, tempCategory)
                            isClose(false)
                        }}
                        >
                        Salvar Alterações
                        </Button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default EditTaskModal;
