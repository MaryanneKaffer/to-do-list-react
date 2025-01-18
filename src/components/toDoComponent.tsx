import { TaskProvider } from "./taskContext.tsx";
import AddTask from "../components/addTask.tsx";
document.documentElement.classList.add("dark");
import Search from "../components/search.tsx";
import Tasks from "../components/tasks.tsx";
import { useState } from "react";

export default function ToDoComponent() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <TaskProvider>
            <body className="m-5">
                <div className="flex gap-2 pb-2">
                    <Search setSearchQuery={setSearchQuery} />
                    <AddTask />
                </div>
                <Tasks searchQuery={searchQuery} />
            </body>
        </TaskProvider>
    )
}