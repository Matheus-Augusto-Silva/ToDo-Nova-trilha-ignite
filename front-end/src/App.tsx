import { useEffect, useState } from "react";
import { CreatedTasks } from "./Components/CreatedTasks";
import { CreateNewTask } from "./Components/CreateNewTask";
import { Header } from "./Components/Header";
import "./global.css";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

function App() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState(0);
  const [newTask, setNewTask] = useState({} as Task);

  useEffect(() => {
    setAllTasks([...allTasks, newTask]);
  }, [newTask]);

  const tasks: Task[] = [];
  useEffect(() => {
    setAllTasks(tasks);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-body">
        <CreateNewTask setNewTask={setNewTask} />
        <CreatedTasks
          allTasks={allTasks}
          setDoneTasks={setDoneTasks}
          doneTasks={doneTasks}
          setAllTasks={setAllTasks}
        />
      </div>
    </div>
  );
}

export default App;
