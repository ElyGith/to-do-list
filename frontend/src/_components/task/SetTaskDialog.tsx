import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Task } from "./Task"

export type propSetTaskDialog = {

    taskValue: Task | null ;
    open : boolean;
    setOpen : (value : boolean) => void;
    parameterSubmit: (value : Task)=>void;
}   


export function SetTaskDialog({ taskValue, open,setOpen,parameterSubmit}: propSetTaskDialog) {
    const emptyValue =
    {
        taskName: "nom d'une tache",
        priorite: 1
    };


const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Task>(
        {
            mode: "onTouched",    
            reValidateMode: "onBlur",
            defaultValues: taskValue? taskValue: emptyValue,
        }
    );


 const [title,setTitle]= useState<string>("");


    useEffect(() => {
        if (taskValue == null) {
            reset(emptyValue);
            setTitle("Crée une nouvelle tâche")
        } else {
            console.log("taskValue =>< :",taskValue);
            reset(taskValue);
            
            setTitle(`Modifier la tâche : ${taskValue.id}`)
        }
    }, [taskValue,reset])  

    const onSubmit = (data: Task) => {
        console.log("data :",data);
        console.log("taskValue :",taskValue);

        const preservedFields = {
            id: taskValue?.id,          // Toujours garder l'id original
            createdAt: taskValue?.createdAt,  // Conserver la date de création
        };

        const submittedData = {
            ...data, 
            ...preservedFields             
        } as Task;

        console.log("submitted data :",submittedData)
        
        parameterSubmit(submittedData);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            
            <DialogContent className="bg-amber-50 sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle> {title}</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="taskName" className="text-right">Nom de la tâche :</Label>
                        <Input
                            id="task_name"
                            type="text"
                            {...register("taskName", {
                                required: "Le nom de la tâche est obligatoire",
                                validate: (value) =>
                                    value.trim() !== "" || "Ne peut pas être vide",
                            })}
                            className="col-span-3"
                        />
                        {errors.taskName && (
                            <span className="col-span-4 text-red-500 text-sm text-right">
                                {errors.taskName.message}
                            </span>
                        )}
                        </div>
{/* 
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">Date échéance :</Label>
                            <Input
                                type="date"
                                id="date"
                                {...register("date", { required: true })}
                                className="col-span-3"
                            />
                            {errors.date && <span className="col-span-4 text-red-500 text-sm text-right">Champ requis</span>}
                        </div>

*/}

{taskValue && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="is_done" className="text-right">Terminée </Label>
                            <Input
                                type="checkbox"
                                id="isDone"
                                value="true"
                                {...register("isDone")}
                                className="col-span-3"
                            />
                        </div>
)}


                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="note" className="text-right">Note :</Label>
                            <Input
                                type="text"
                                id="note"
                                {...register("note")}
                                className="col-span-3"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="priorite" className="text-right">Priorité :</Label>
                            <Input
                                type="number"
                                id="priorite"
                                {...register("priorite")}
                                className="col-span-3"
                            />
                        </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="liste" className="text-right">Liste :</Label>
                        <Input
                            type="string"
                            id="liste"
                            {...register("liste")}
                            className="col-span-3"
                        />
                    </div>


                        <DialogFooter className="col-span-4">
                            <Button className="hover:text-xl" type="submit">Enregistrer</Button>
                        </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>
    )
}