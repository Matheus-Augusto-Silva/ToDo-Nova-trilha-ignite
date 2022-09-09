import { useState, useEffect, useMemo } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./CreateNewTask.module.css";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

interface CreateNewTaskProps {
  setNewTask: (task: Task) => void;
}

export const CreateNewTask = ({ setNewTask }: CreateNewTaskProps) => {
  const [taskContentText, setTaskContentText] = useState("");

  const handleTaskText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskContentText(event.target.value);
  };

  function handleCreateNewTask() {
    const newTask = {
      id: Math.random(),
      description: taskContentText,
      done: false,
    };
    if (taskContentText !== "") {
      setNewTask(newTask);
    }
    setTaskContentText("");
  }

  return (
    <div className={styles.container}>
      <input
        onChange={handleTaskText}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskContentText}
      />
      <button onClick={handleCreateNewTask} className={styles.button}>
        Criar
        <AiOutlinePlusCircle className={styles.circle} />
      </button>
    </div>
  );
};
