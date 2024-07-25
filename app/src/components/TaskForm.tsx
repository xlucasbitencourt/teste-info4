import { Button, Label, TextInput, Textarea } from "flowbite-react";

type Props = {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function TaskForm({
  title,
  setTitle,
  description,
  setDescription,
  handleSubmit,
}: Props) {
  return (
    <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" color={!title ? "failure" : ""} />
        </div>
        <TextInput
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          id="title"
          type="text"
          placeholder="Title..."
          required
          color={!title ? "failure" : ""}
          helperText={title ? "" : "Title is required"}
          maxLength={50}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" color={!description ? "failure" : ""} />
        </div>
        <Textarea
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          id="description"
          placeholder="Describe your task..."
          required
          rows={4}
          color={!description ? "failure" : ""}
          helperText={description ? "" : "Description is required"}
          maxLength={250}
        />
      </div>

      <Button type="submit" size="lg" gradientMonochrome="lime" pill>
        Create
      </Button>
    </form>
  );
}
