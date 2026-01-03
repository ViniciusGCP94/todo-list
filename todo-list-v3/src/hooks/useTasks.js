import { useState, useEffect, useMemo } from "react";
import { categories } from "../constants/categories";

export function useTasks () {	
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem('storage-tasks');
    return savedTask ? JSON.parse(savedTask) : [];
  });

  const [filter, setFilter] = useState('All');

  function handleFilterChange (filter) {
    setFilter(filter);
  } 

  const filteredTasks = useMemo(() => { 
    return tasks.filter((task) => {
      if (filter === 'All') return true;
      if (filter === 'Completed') return task.completed;
      if (filter === 'Pending') return !task.completed;

      const isCategory = categories.some(cat => cat.id === filter);
      if (isCategory){
        return task.category === filter;
      }

      return false;
  })}, [tasks, filter]);	

  const pendingTasks = useMemo(() => {
    return tasks.filter(task => !task.completed)
  },[tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter(task => task.completed)
  }, [tasks]);


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
    setTasks( prev => [...prev, newTask]);
  };

  const deleteTask = (id) =>{
    setTasks( prev => prev.filter(task => task.id !== id));
  }

  const updateTask = (id, newText, newCategory ) => {
    setTasks( prev => prev.map(task => task.id === id ? {...task, text: newText, category: newCategory} : task));
  }

  const toggleTaskCompleted = (id) => {
    setTasks( prev =>  prev.map(task => task.id === id ?{...task, completed: !task.completed } : task));
  }
  
  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompleted,
    pendingTasks,
    completedTasks,
    filteredTasks,
    handleFilterChange,
    filter,
    updateTask
  };
}

