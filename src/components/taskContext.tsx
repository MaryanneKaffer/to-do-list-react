import React, { createContext, useState, ReactNode } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  isFavorite?: boolean;
};

export const TaskContext = createContext({
  tasks: [] as Task[],
  addTask: (title: string, description: string) => { },
  removeTask: (id: string) => { },
  updateTask: (updatedTask: Task) => { },
  toggleFavorite: (taskId: string) => { },
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks,] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: `${Date.now()}-${Math.random()}`, 
      title,
      description,
      isFavorite: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const toggleFavorite = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask, toggleFavorite }}>
      {children}
    </TaskContext.Provider>
  );

};