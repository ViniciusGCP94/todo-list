import './App.css'
/*import {useTasks} from './hooks/useTasks';
import Header from './components/header/header'
import TaskList from './components/taskList/taskList';
import FilterBar from './components/filterBar/filterBar';
import TaskForm from './components/taskForm/taskForm';*/
import Card from './components/common/Card';
import Input from './components/common/Input';
import Button from './components/common/Button';

function App() {
  
  /*const { addTask, filter, filteredTasks, deleteTask, toggleTaskCompleted, updateTask, handleFilterChange} = useTasks();*/

  return (
    <>
      <Card><h1>Teste de Card</h1></Card>
      <Input label="Nome do Projeto" placeholder="Ex: Estudo de React" />
      <Button
      variant="secondary"
      onClick={() => alert('Projeto criado!')}
      className="mt-4"
      >Criar Projeto</Button>

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
