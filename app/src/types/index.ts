export interface TaskRequest {
  title: string;
  description: string;
  completed?: boolean;
}

export interface TaskResponse extends TaskRequest {
  id: number;
  completed: boolean;
}