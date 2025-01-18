import TaskOptionsPopover from "./taskOptionsPopover";
import TaskEditModal from "./taskEditModal";
import ValidateTask from "./validateTask";
import { useState } from "react";

export default function TaskOptions({ task, onEditTask, onDeleteTask }: {
  task: { id: string; title: string; description: string };
  onEditTask: (updatedTask: any) => void;
  onDeleteTask: (id: string) => void;
}) {

  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
  const [description, setDescription] = useState(task.description);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [isModalOpen, setModalOpen] = useState(false);

  const { validate } = ValidateTask({
    title,
    description,
    onValidationSuccess: () => {
      const updatedTask = { ...task, title, description };
      onEditTask(updatedTask);
      setErrors({ title: "", description: "" });
      setModalOpen(false);
    },
    onValidationError: (validationErrors) => {
      setErrors(validationErrors);
    },
  });

  const handleDelete = () => {
    onDeleteTask(task.id);
    setIsPopoverOpen(false);
  };

  return (
    <>
      <TaskOptionsPopover isPopoverOpen={isPopoverOpen} setIsPopoverOpen={setIsPopoverOpen} setModalOpen={setModalOpen} handleDelete={handleDelete} />
      <TaskEditModal
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        errors={errors}
        handleAction={validate}
        actionLabel="Save"
        modalTitle="Edit Task"
      />
    </>
  )
}