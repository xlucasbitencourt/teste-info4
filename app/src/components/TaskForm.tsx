import { Button, Label, TextInput, Textarea } from "flowbite-react";

type Props = {};

export default function TaskForm({}: Props) {
  return (
    <form className="flex max-w-lg flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput id="title" type="text" placeholder="Title..." required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea id="description" placeholder="Describe your task..." required rows={4} />
      </div>

      <Button type="submit" size="lg" gradientMonochrome="lime">Create</Button>
    </form>
  );
}
