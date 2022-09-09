import styles from "./WithTask.module.css";
import { Checked } from "../assets/Checked";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

interface TasksProps {
  tasks: Task[];
  setAllTasks: (tasks: Task[]) => void;
}

export const WithTask = ({ tasks, setAllTasks }: TasksProps) => {
  const handleCheck = (item: Task) => {
    const newTasks = tasks.map(task => {
      if (task.id === item.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setAllTasks(newTasks);
  };

  const handleDelete = (item: Task) => {
    const newTasks = tasks.filter(task => task.id !== item.id);
    setAllTasks(newTasks);
  };

  return (
    <div>
      {tasks.map(task => (
        <div className={styles.container} key={task.id}>
          <div className={styles.container2}>
            <button
              onClick={() => handleCheck(task)}
              className={
                task.done ? styles.taskCheckedButton : styles.taskCheckButton
              }
            >
              {task.done ? (
                <div>
                  <Checked />
                </div>
              ) : null}
            </button>
            <p
              className={
                task.done ? styles.taskCheckedText : styles.taskCheckText
              }
            >
              {task.description}
            </p>
          </div>
          <button
            className={styles.trash}
            onClick={() => handleDelete(task)}
          ></button>
        </div>
      ))}
    </div>
  );
};
