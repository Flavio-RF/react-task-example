import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        title,
        id: tasks.length,
        description,
      },
    ]);
  }

  function deleteTask(taskId) {
    // por cada tarea que recorro, comparo si la tarea en su propiedad id es distinto a la que me estan pasando
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
