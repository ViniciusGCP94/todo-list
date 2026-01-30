import React from 'react'
import ActionButton from '../common/ActionButton';

function FilterBar (props) {
    const {setFilter, filter} = props;

    return (
        <div className="w-full flex gap-4 py-4 mb-6 justify-center md:justify-end">
            <ActionButton 
                variant={filter === 'All' ? 'filterActive' : 'filter'}
                onClick={() => setFilter('All')}
            >
                Todas
            </ActionButton>
            <ActionButton
                variant={filter === 'Pending' ? 'filterActive' : 'filter'}
                onClick={() => setFilter('Pending')}
            >
                Pendentes
            </ActionButton>
            <ActionButton
                variant={filter === 'Completed' ? 'filterActive' : 'filter'}
                onClick={() => setFilter('Completed')} 
            >
                Concluídas
            </ActionButton>
        </div>
  )
}

export default FilterBar
