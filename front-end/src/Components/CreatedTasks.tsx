import React, { useEffect, useState } from "react";

import styles from "./CreatedTasks.module.css";
import { WithoutTask } from "./WithoutTask";
import { WithTask } from "./WithTask";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

interface CreatedTasksProps {
  allTasks: Task[];
  doneTasks: number;
  setAllTasks: (tasks: Task[]) => void;
  setDoneTasks: (doneTasks: number) => void;
}

export const CreatedTasks = ({
  allTasks,
  doneTasks,
  setAllTasks,
  setDoneTasks,
}: CreatedTasksProps) => {
  const allDoneTasks = allTasks.filter(task => task.done).length;

  useEffect(() => {
    setDoneTasks(allDoneTasks);
  }, [allDoneTasks]);

  return (
    <>
      <div className={styles.tasksData}>
        <div className={styles.taskContainer1}>
          <span>Tarefas Criadas</span>
          <button>{allTasks.length}</button>
        </div>
        <div className={styles.taskContainer2}>
          <span>Concluídas</span>
          <button>
            {doneTasks} de {allTasks.length}
          </button>
        </div>
      </div>
      <div>
        {allTasks.length ? (
          <WithTask tasks={allTasks} setAllTasks={setAllTasks} />
        ) : (
          <WithoutTask />
        )}
      </div>
    </>
  );
};
