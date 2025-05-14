import { HeaderTask } from "../HeaderTask";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useState, useEffect } from "react";
import { SetTaskDialog } from "./SetTaskDialog";
import { callGetAllTasks, callDeleteTask, callCreateTask } from "@/services/taskService";


export type Task = {
    id: string
    taskName: string,
    isDone: boolean,
    note?: string,
    liste?: string,
    createAt: Date,
    updateAt: Date,
    priorite: number


}

export const Task = () => {

    const [selectedTask, setSelectedTask] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [dataTask, setDataTask] = useState<Task[]>([])

     const loadTasks = async () => {
        try {
            const data = await callGetAllTasks()
            console.log(data[0])
            setDataTask(data)
        } catch (err) {
            console.error('Erreur lors du chargement des tâches', err)
        } 
        
    }
    
    useEffect(() => {
        loadTasks()
    }, [])

    const handleEdit = (idTask: string) => {
        setSelectedTask(idTask);
        setOpen(true);
    };

    async function handleDelete(idTask : string) {
        await callDeleteTask(idTask)
        await loadTasks()
        
     }  
  
    async function handleAdd(task : Task) {
        await callCreateTask(task)
        await loadTasks()

    }  
    return (
        <main className="flex flex-col gap-4 w-full p-6">
            <HeaderTask handleAdd={handleAdd} />

            <SetTaskDialog taskName={selectedTask} open={open} setOpen={setOpen}/>

            <DataTable columns={columns({ handleEdit, handleDelete,handleAdd})} data={dataTask}/>

        </main>
    );
};