import { Accordion } from "flowbite-react";
import { Button, Card } from "flowbite-react";
import { TaskResponse } from "../types";

type Props = {
  tasks: TaskResponse[];
  completeTask: (task: TaskResponse) => void;
  removeTask: (id: number) => void;
};

export default function TasksList({ tasks, completeTask, removeTask }: Props) {
  return (
    <Accordion collapseAll alwaysOpen>
      {tasks.map((task) => (
        <Accordion.Panel key={task.id}>
          <Accordion.Title>
            <p className={`text-xl ${task.completed && "text-green-600"}`}>
              {task.title}
            </p>
          </Accordion.Title>
          <Accordion.Content>
            <Card className={`${task.completed ? "bg-green-100" : "bg-gray-100"}`}>
              <p className="italic text-lg mb-4">{task.description}</p>
              <Button
                className="-mb-3"
                onClick={() => completeTask(task)}
                disabled={task.completed}
                gradientMonochrome="success"
                pill
              >
                {task.completed ? "Completed" : "Mark as completed"}
              </Button>
              <Button
                onClick={() => removeTask(task.id)}
                disabled={!task.completed}
                gradientMonochrome="failure"
                pill
              >
                {task.completed ? "Delete task" : "Complete task first"}
              </Button>
            </Card>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
}
