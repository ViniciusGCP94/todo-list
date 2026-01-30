import React, { useState, useRef, useEffect } from 'react'
import { LuChevronDown } from "react-icons/lu";

const CategorySelect = ({selectedCategory, onCategoryChange, categories, direction}) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (id) => {
        onCategoryChange(id); 
        setIsOpen(false);     
    };

    return (
        <div className="relative w-fit" ref={selectRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-auto min-w-30 flex items-center justify-around gap-2 bg-indigo-950 hover:bg-indigo-800 text-sm text-white py-1.5 px-3 border border-gray-50 rounded-full cursor-pointer transition-all select-none"
            >
                <div className="flex items-center gap-2">
                    <span>{categories.find(c => c.id === selectedCategory)?.label || 'Geral'}</span>
                </div>
                <LuChevronDown className={`h-4 w-4 text-sky-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (       
                <ul className={`absolute right-0 w-full bg-indigo-900 border border-gray-50 rounded-xl shadow-2xl z-50 overflow-hidden py-1
                    ${direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-1'}`}>
                    {categories.map((cat) => (
                        <li 
                            key={cat.id}
                            onClick={() => handleSelect(cat.id)} 
                            className="flex items-center gap-3 px-4 py-2 hover:rounded-2xl hover:bg-indigo-950 cursor-pointer text-gray-200 text-sm transition-colors"
                        >
                            <span>{cat.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default CategorySelect;