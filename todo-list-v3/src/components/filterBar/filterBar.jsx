import React from 'react'

function FilterBar (props) {
    const {setFilter, filter} = props;

    return (
        <div className="flex gap-4 mb-6 justify-end">
            <button 
                onClick={() => setFilter('All')}
                className={`px-2 py-0.5 border-2 rounded-lg transition-all ${
                filter === 'All' 
                ? 'bg-indigo-800 border-indigo-800 text-white' 
                : 'bg-indigo-950 border-indigo-950 text-gray-300'
                }`}
            >
                Todas
            </button>
            <button
                onClick={() => setFilter('Pending')}
                className={`px-2 py-0.5 border-2 rounded-lg transition-all ${
                filter === 'Pending' 
                ? 'bg-indigo-800 border-indigo-800 text-white' 
                : 'bg-indigo-950 border-indigo-950 text-gray-300'
                }`}
            >
                Pendentes
            </button>
            <button
                onClick={() => setFilter('Completed')}
                className={`px-2 py-0.5 border-2 rounded-lg transition-all ${
                filter === 'Completed' 
                ? 'bg-indigo-800 border-indigo-800 text-white' 
                : 'bg-indigo-950 border-indigo-950 text-gray-300'
                }`}
                
            >
                Concluídas
            </button>
        </div>
  )
}

export default FilterBar
