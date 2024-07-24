import axios from "axios";
import { TaskRequest } from "../types";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getTasks = async () => {
  return await api.get("/tasks");
};

export const getTask = async (id: string) => {
  return await api.get(`/tasks/${id}`);
};

export const createTask = async (task: TaskRequest) => {
  return await api.post("/tasks", task);
};

export const updateTask = async (id: string, task: TaskRequest) => {
  return await api.put(`/tasks/${id}`, task);
};

export const deleteTask = async (id: string) => {
  return await api.delete(`/tasks/${id}`);
};