import { HeaderTask } from "./HeaderTask";
import { DataTable } from "./task/data-table";
import { columns, data_task } from "./task/columns";
import { useState } from "react";
import { SetTaskDialog } from "./SetTaskDialog";
export const Task = () => {

    const [selectedTask, setSelectedTask] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const handleEdit = (idTask: string) => {
        setSelectedTask(idTask);
        setOpen(true);
    };
    return (
        <main className="flex flex-col gap-4 w-full p-6">
            <HeaderTask />

            <SetTaskDialog taskName={selectedTask} open={open} setOpen={setOpen}/>

            <DataTable columns={columns(handleEdit)} data={data_task}/>

        </main>
    );
};