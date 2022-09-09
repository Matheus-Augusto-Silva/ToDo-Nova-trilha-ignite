import styles from "./WithoutTask.module.css";

import { Clipboard } from "../assets/Clipboard";

export const WithoutTask = () => {
  return (
    <div className={styles.container}>
      <Clipboard />
      <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
