import { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../api";
import { TaskResponse } from "../types";
import TasksList from "../components/TasksList";
import { Spinner } from "flowbite-react";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    const { data } = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  const completeTask = async (task: TaskResponse) => {
    const response = await updateTask(task.id, { ...task, completed: true });
    console.log(response);
    fetchTasks();
  };

  const removeTask = async (id: number) => {
    const response = await deleteTask(id);
    console.log(response);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <h2>Click in the title to open</h2>
      {loading ? (
        <div className="text-center">
          <Spinner size="xl" />
        </div>
      ) : (
        <TasksList tasks={tasks} completeTask={completeTask} removeTask={removeTask} />
      )}
    </div>
  );
}
