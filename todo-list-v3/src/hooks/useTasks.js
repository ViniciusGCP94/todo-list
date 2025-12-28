import { useState, useEffect } from "react";

export function useTasks () {	
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem('storage-tasks');
    return savedTask ? JSON.parse(savedTask) : [];
  });


  useEffect(() => {
    localStorage.setItem('storage-tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (text, category) => {
    if (text.trim() === "") return;
    const newTask = {
        id: Date.now(),
        text: text,
        category: category || "Geral",
        completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id));
  }

  const taskChecked = (id) => {
    setTasks(tasks.map(task => task.id === id ?{...task, completed: !task.completed } : task));
  }
  return {
    tasks,
    addTask,
    deleteTask,
    taskChecked,
    pendingTasks: tasks.filter(task => !task.completed),
    completedTasks: tasks.filter(task => task.completed)
  };
}

