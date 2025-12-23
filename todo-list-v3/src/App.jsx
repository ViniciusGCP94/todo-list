import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import TaskItem from './components/taskItem/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        if (text.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) =>{
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks)
    }

  return (
    <>
      < Header onAddTask={addTask} />
      <main className="p-4 max-w-2xl mx-auto flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask} 
            className="bg-indigo-950 p-4 rounded-lg border border-gray-500 text-white"
          />   
        ))}
      </main>
    </>
  )
}

export default App
