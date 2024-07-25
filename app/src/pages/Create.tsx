import { useState } from "react";
import { createTask } from "../api";
import TaskForm from "../components/TaskForm";
import CreateTaskModal from "../components/CreateTaskModal";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createTask({ title, description });
    console.log(response);
    setTitle("");
    setDescription("");
    setOpenModal(true);
  };

  return (
    <div>
      <CreateTaskModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="flex flex-col items-center gap-2 mb-5">
        <h1 className="text-4xl font-bold">Create task</h1>
        <p className="text-3xl">Create your task</p>
      </div>
      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
