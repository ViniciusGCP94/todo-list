import './App.css'
/*import {useTasks} from './hooks/useTasks';
import Header from './components/header/header'
import TaskList from './components/taskList/taskList';
import FilterBar from './components/filterBar/filterBar';
import TaskForm from './components/taskForm/taskForm';*/
import Card from './components/common/Card';
import Input from './components/common/Input';
import Button from './components/common/Button';
import { useProjectStore } from './store/useStore';

function App() {
  
  /*const { addTask, filter, filteredTasks, deleteTask, toggleTaskCompleted, updateTask, handleFilterChange} = useTasks();*/
  const projects = useProjectStore((state) => state.projects);
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Zustand: {projects.length} Projeto(s)</h1>
        <div className="flex flex-col gap-2">
          {projects.map(proj => (
            <div key={proj.id} className="p-4 bg-indigo-900 rounded-lg border border-indigo-500">
              {proj.name} - ({proj.tasks.length} tarefas)
            </div>
          ))}
        </div>
      </div>
      {/* < Header/>
      <main className="min-h-screen max-w-2xl mx-auto flex flex-col gap-1 lg:justify-start">
        <TaskForm addTask={addTask} />
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
      </main>*/}
    </>
  )
}

export default App
