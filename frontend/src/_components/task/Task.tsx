import { HeaderTask } from "../HeaderTask";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import { useState, useEffect } from "react";
import { SetTaskDialog } from "./SetTaskDialog";
import { callGetTasks,callGetAllTasks, callDeleteTask, callCreateTask, callUpdateTask } from "@/services/taskService";


export type Task = {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,

    taskName: string,
    isDone?:  string,
    note?: string,
    liste?: string,
    priorite?: number


}

//Faire une fonction utilitaire qui avec l'id d'une tache 
// construit une tache (et pourra recup le nom en particulier)
// a partir de callGetTask

export const Task = () => {

    const [selectedTask, setSelectedTask] = useState<Task | null >(null);
    const [open, setOpen] = useState(false);
    const [dataTask, setDataTask] = useState<Task[]>([])

     const loadTasks = async () => {
        try {
            const data = await callGetAllTasks()
          
            setDataTask(data)
        } catch (err) {
            console.error('Erreur lors du chargement des tâches', err)
        } 
        
    }
    
    useEffect(() => {
        loadTasks()
    }, [])

    const handleEdit = async (idTask: string) => {
        const data = await callGetTasks(idTask)

        setSelectedTask(data);
        setOpen(true);
        await loadTasks()
    };

    async function handleDelete(idTask : string) {
        await callDeleteTask(idTask)
        await loadTasks()
        
     }  
  
    async function handleAdd() {
        setSelectedTask(null)
        setOpen(true);
        await loadTasks()
    
    //    await callCreateTask() dans le handler de setTaskDialog
    }  

    const handleSubmitTask = async (data: Task | null) => {
      //  console.log(`test before !!! => `,data?.taskName)

        if(!data?.id)
        {
            console.log(`test Create =>  ${data}`)
            await callCreateTask(data)
        }
        else
        {
            console.log(`test UPDATE =>  `,data)
//faut que je recup l'id ou que je retrp
            await callUpdateTask(data)


        }
        console.log("Tâche traitée :", data); //appel a post ou put 
        await loadTasks()

        setOpen(false); // pour fermer le dialogue
      };

      const handleUpdateDone = async (id:string)=>{

        
        const data=await callGetTasks(id);
       // console.log(`test update done =>  `,data.isDone)
        if(data.isDone)
        {
            data.isDone="false"
        }
        else
        {
            data.isDone="true"
        }
        await callUpdateTask(data)
        await loadTasks()
        //console.log("Tâche traitée :", data); 
      }
      



    return (
        <main className="flex flex-col gap-4 w-full p-6">
            <HeaderTask handleAdd={handleAdd} />

            <SetTaskDialog taskValue={selectedTask} open={open} setOpen={setOpen} parameterSubmit={handleSubmitTask}/>

            <DataTable columns={columns({ handleEdit, handleDelete, handleAdd })} data={dataTask} handleSubmitChange={handleUpdateDone}/>

        </main>
    );
};