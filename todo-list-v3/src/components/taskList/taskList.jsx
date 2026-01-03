import React from 'react'
import TaskItem from '../taskItem/TaskItem';

function TaskList (props) {
    const {title, tasks, onDelete, onComplete, updateTask} = props;

  return (
    <>
        <section className='flex flex-col gap-3 mb-8'>
            <h1 className='text-gray-50 text-left text-2xl mb-4 tracking-wider'>{title}</h1>
            {tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onDelete={onDelete} 
                onComplete={onComplete}
                updateTask={updateTask}
            />   
            ))}
        </section>
    </>
  )
}

export default TaskList