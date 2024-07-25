import { Accordion } from "flowbite-react";
import { Button } from "flowbite-react";
import { TaskResponse } from "../types";

type Props = {
  tasks: TaskResponse[];
};

export default function TasksList({ tasks }: Props) {
  return (
    <Accordion collapseAll alwaysOpen>
      {tasks.map((task) => (
        <Accordion.Panel key={task.id}>
          <Accordion.Title>
            <p className="text-xl">{task.title}</p>
          </Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              <p className="italic text-lg">{task.description}</p>
              <Button disabled={task.completed} color="success" pill>
                {task.completed ? "Completed" : "Mark as completed"}
              </Button>
              <Button disabled={!task.completed} color="failure" pill>
                {task.completed ? "Delete task" : "Complete task first"}
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
}
