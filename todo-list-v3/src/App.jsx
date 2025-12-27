import './App.css'
import useTasks from './hooks/useTasks';
import Header from './components/header/header'
import TaskItem from './components/taskItem/TaskItem';

function App() {
  
  const { addTask, deleteTask, taskChecked, pendingTasks, completedTasks} = useTasks();

  return (
    <>
      < Header onAddTask={addTask} />
      <main className="h-80 max-w-2xl mx-auto flex flex-col justify-between p-4 gap-1">
        <section className='flex flex-col gap-3'>
          <h1 className='text-gray-50 text-left text-2xl mb-4 tracking-wider'>Tarefas a fazer </h1>
          {pendingTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask} 
            onComplete={taskChecked}
          />   
        ))}
        </section>

        
        <section className="flex flex-col gap-3">
        {completedTasks.length > 0 && <hr className="border-gray-600 " />}
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
        
      </main>
    </>
  )
}

export default App
