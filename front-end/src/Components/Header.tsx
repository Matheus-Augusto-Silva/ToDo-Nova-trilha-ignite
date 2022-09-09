import styles from "./Header.module.css";
import { Rocket } from "../assets/Rocket";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Rocket />
        <div className={styles.text}>
          <span>to</span>
          <span>Do</span>
        </div>
      </div>
    </header>
  );
};
