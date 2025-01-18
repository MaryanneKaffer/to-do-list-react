import { Button} from "@nextui-org/react";
import { useContext, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { TaskContext } from "./taskContext";
import ValidateTask from "./validateTask";
import TaskEditModal from "./taskEditModal";

export default function App() {
    const [description, setDescription] = useState("");
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState({ title: "", description: "" });
    const [isModalOpen, setModalOpen] = useState(false);

    const { validate } = ValidateTask({
        title,
        description,
        onValidationSuccess: () => {
            addTask(title, description);
            setTitle("");
            setDescription("");
            setErrors({ title: "", description: "" });
            setModalOpen(false);
        },
        onValidationError: (validationErrors) => {
          setErrors(validationErrors);
        },
      });
    
    return (
        <>
            <Button color="primary" onPress={() => setModalOpen(true)}
                startContent={<MdOutlineEditNote size={20} />}> Add
            </Button>

            <TaskEditModal
                isOpen={isModalOpen}
                onOpenChange={setModalOpen}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                errors={errors}
                handleAction={validate}
                actionLabel="Add Task"
                modalTitle="Add New Task"
            />
        </>
    );
}