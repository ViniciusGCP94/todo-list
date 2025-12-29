import './App.css'
import {useTasks} from './hooks/useTasks';
import Header from './components/header/header'
import TaskItem from './components/taskItem/TaskItem';

function App() {
  
  const { addTask, deleteTask, taskChecked, filter, completedTasks, pendingTasks, handleFilterChange} = useTasks();

  return (
    <>
      < Header onAddTask={addTask} />
      <main className="h-80 max-w-2xl mx-auto flex flex-col justify-between p-4 gap-1">
        <div className="flex gap-4 mb-6 justify-end">
          <button 
          onClick={() => handleFilterChange('All')}
          className={`px-2 py-0.5 border-2 rounded-lg transition-all ${
            filter === 'All' 
            ? 'bg-indigo-800 border-indigo-800 text-white' 
            : 'bg-indigo-950 border-indigo-950 text-gray-300'
          }`}>
            Todas
          </button>
          <button
          onClick={() => handleFilterChange('Pending')}
          className={`px-2 py-0.5 border-2 rounded-lg transition-all ${
            filter === 'Pending' 
            ? 'bg-indigo-800 border-indigo-800 text-white' 
            : 'bg-indigo-950 border-indigo-950 text-gray-300'
          }`}
          >
            Pendentes
          </button>
          <button
          onClick={() => handleFilterChange('Completed')}
          className={`px-2 py-0.5 border-2 rounded-lg transition-all ${
            filter === 'Completed' 
            ? 'bg-indigo-800 border-indigo-800 text-white' 
            : 'bg-indigo-950 border-indigo-950 text-gray-300'
          }`}
          
          >
            Concluídas
          </button>
        </div>
        {(filter === 'All' || filter === 'Pending') && (
          <section className='flex flex-col gap-3 mb-8'>
            <h1 className='text-gray-50 text-left text-2xl mb-4 tracking-wider'>Tarefas a fazer</h1>
            {pendingTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask} 
                onComplete={taskChecked}
              />   
            ))}
          </section>
        )}

        {(filter === 'All' || filter === 'Completed') && (
          <section className="flex flex-col gap-3">
            {completedTasks.length > 0 && <hr className="border-gray-600 mb-4" />}
            <h1 className='text-gray-50 text-left text-2xl mb-4 tracking-wider'>Tarefas Completas</h1>
            {completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onComplete={taskChecked}
              />
            ))}
          </section>
        )}     
      </main>
    </>
  )
}

export default App
