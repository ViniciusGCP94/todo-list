import './App.css'
import {useTasks} from './hooks/useTasks';
import Header from './components/header/header'
import TaskList from './components/taskList/taskList';
import FilterBar from './components/filterBar/filterBar';
function App() {
  
  const { addTask, filter, completedTasks, pendingTasks, deleteTask, toggleTaskCompleted, updateTask, handleFilterChange} = useTasks();

  return (
    <>
      < Header onAddTask={addTask} />
      <main className="h-80 max-w-2xl mx-auto flex flex-col justify-between p-4 gap-1">
        <FilterBar 
          filter={filter} 
          setFilter={handleFilterChange} 
        />
        { (filter === 'All' || filter === 'Pending') && 
          <TaskList 
          title="Tarefas a fazer" 
          tasks={pendingTasks}
          onDelete={deleteTask}
          onComplete={toggleTaskCompleted}
          updateTask={updateTask} 
          /> 
        }
        { (filter === 'All' || filter === 'Completed') && 
          <TaskList 
          title="Tarefas concluídas" 
          tasks={completedTasks} 
          onDelete={deleteTask}
          onComplete={toggleTaskCompleted}
          updateTask={updateTask} 
          /> 
        }
      </main>
    </>
  )
}

export default App
