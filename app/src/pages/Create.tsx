import TaskForm from "../components/TaskForm";

export default function Create() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mb-5">
        <h1 className="text-4xl font-bold">Create task</h1>
        <p className="text-3xl">Create your task</p>
      </div>
      <TaskForm />
    </div>
  );
}
