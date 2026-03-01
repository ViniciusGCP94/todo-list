import { createPortal } from 'react-dom';

const Modal = ({ isOpen, isClose, children, titulo }) => {
    
    if (!isOpen) return null;

    return createPortal (
        <div className="fixed inset-0 bg-indigo-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-lg bg-indigo-950 border border-gray-100 p-6 rounded-3xl shadow-2xl flex flex-col gap-6">
                
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">{titulo}</h2>
                    <button 
                        onClick={() => isClose(false)} 
                        className="text-gray-400 hover:text-white text-2xl">
                        &times;
                    </button>
                </div>

                {children}
                
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;