import { MdFavorite, MdOutlineEventNote } from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { TaskContext, Task } from "./taskContext";
import { useContext } from "react";
import {TaskCard, TaskNotFound} from "./taskCard";

interface TasksProps {
  searchQuery: string;
}

export default function Tasks({ searchQuery }: TasksProps) {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg flex gap-1 items-center"> <MdFavorite /> Favorite Tasks </p>
      <Divider className="max-w-3xl"  />
      <TaskList tasks={tasks} isFavorite={true} searchQuery={searchQuery} />

      <p className="text-lg flex gap-1 items-center"> <MdOutlineEventNote size={20} /> Tasks </p>
      <Divider className="max-w-3xl" />
      <TaskList tasks={tasks} isFavorite={false} searchQuery={searchQuery}/>
    </div>
  );
}

function TaskList({ tasks, isFavorite, searchQuery }: { tasks: Task[], isFavorite: boolean, searchQuery: string }) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          isFavorite === task.isFavorite && 
          (task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           task.description.toLowerCase().includes(searchQuery.toLowerCase())) && (
            <TaskCard {...task} key={task.id} />
          )
        ))
      ) : (
        <TaskNotFound />
      )}
    </div>
  );
}