import { Card, CardBody } from "@nextui-org/react";
import { useContext } from "react";
import FavoriteTask from "./favoriteTask";
import { Task, TaskContext } from "./taskContext";
import TaskOptions from "./taskOptions";

function TaskCard(task: Task) {
    const { updateTask, removeTask } = useContext(TaskContext);

    const handleEditTask = (updatedTask: Task) => {
        updateTask(updatedTask);
    };

    const handleDeleteTask = (id: string) => {
        removeTask(id);
    };

    return (
        <Card key={task.id} className="max-w-3xl">
            <CardBody className="flex justify-between">
                <div>
                    <p className="text-xl mb-2">{task.title}</p>
                    <p>{task.description}</p>
                </div>
                <div className="flex justify-end">
                    <FavoriteTask task={task} />
                    <TaskOptions
                        key={task.id}
                        task={task}
                        onEditTask={handleEditTask}
                        onDeleteTask={handleDeleteTask}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

function TaskNotFound() {
    return (
        <p className="text-lg flex gap-1 items-center">No tasks found.</p>
    );
}

export { TaskCard, TaskNotFound };