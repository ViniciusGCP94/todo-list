import './App.css'
import { useState } from 'react'
import Header from './components/header/header'

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

  return (
    <>
      < Header onAddTask={addTask} />
      <main className="p-4 max-w-2xl mx-auto flex flex-col gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-indigo-950 p-4 rounded-lg border border-gray-500 text-white">
            {task.text}
          </div>
        ))}
      </main>
    </>
  )
}

export default App
