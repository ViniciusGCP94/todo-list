import './App.css'
import {useTasks} from './hooks/useTasks';
import Header from './components/header/header'
import TaskList from './components/taskList/taskList';
import FilterBar from './components/filterBar/filterBar';
import TaskForm from './components/taskForm/taskForm';

function App() {
  
  const { addTask, filter, filteredTasks, deleteTask, toggleTaskCompleted, updateTask, handleFilterChange} = useTasks();

  return (
    <>
      < Header/>
      <main className="min-h-screen max-w-2xl mx-auto flex flex-col gap-1 lg:justify-start">
        <TaskForm onAddTask={addTask} />
        <FilterBar 
          filter={filter} 
          setFilter={handleFilterChange} 
        />
        { (filter === 'All' || filter === 'Pending') && 
          <TaskList 
          title="Tarefas a fazer" 
          tasks={filteredTasks.filter(task => !task.completed)}
          onDelete={deleteTask}
          onComplete={toggleTaskCompleted}
          updateTask={updateTask} 
          /> 
        }
        { (filter === 'All' || filter === 'Completed') && 
          <TaskList 
          title="Tarefas concluídas" 
          tasks={filteredTasks.filter(task => task.completed)} 
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
