import { HeaderTask } from "../HeaderTask";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useState, useEffect } from "react";
import { SetTaskDialog } from "./SetTaskDialog";
import { callGetAllTasks, callDeleteTask, callCreateTask, callUpdateTask } from "@/services/taskService";


export type Task = {
    id?: string,
    created_at?: Date,
    updated_at?: Date,

    task_name: string,
    is_done?: boolean,
    note?: string,
    liste?: string,
    priorite?: number


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
  
    async function handleAdd() {
        setSelectedTask(null)
        setOpen(true);
    //    await callCreateTask() dans le handler de setTaskDialog
    }  

    const handleSubmitTask = (data: Task) => {
        console.log(`test before !!! => `,data)

        if(!data.id)
        {
            console.log(`test Create =>  ${data}`)
            callCreateTask(data)
        }
        else
        {
            console.log(`test UPDATE =>  ${data}`)

            callUpdateTask(data)

        }
        console.log("Tâche traitée :", data); //appel a post ou put 
        setOpen(false); // pour fermer le dialogue
        loadTasks()
      };
      



    return (
        <main className="flex flex-col gap-4 w-full p-6">
            <HeaderTask handleAdd={handleAdd} />

            <SetTaskDialog taskName={selectedTask} open={open} setOpen={setOpen} parameterSubmit={handleSubmitTask}/>

            <DataTable columns={columns({ handleEdit, handleDelete,handleAdd})} data={dataTask}/>

        </main>
    );
};