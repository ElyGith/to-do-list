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
import type { Task } from "./Task"

export type propSetTaskDialog = {
    taskName: string | null;
    open : boolean;
    setOpen : (value : boolean) => void;
    parameterSubmit: (value : Task)=>void;
}   


export function SetTaskDialog({ taskName, open,setOpen,parameterSubmit}: propSetTaskDialog) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Task>(
        {
            mode: "onTouched",    
            reValidateMode: "onBlur"
        }
    );


 const [title,setTitle]= useState<string>("");


    useEffect(() => {
        if (taskName == null) {
            reset();
            setTitle("Crée une nouvelle tâche")
        } else {
            reset();
            setTitle(`Modifier la tâche : ${taskName}`)
        }
    }, [taskName,reset])  

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            
            <DialogContent className="bg-amber-50 sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle> {title}</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(parameterSubmit)}>
                <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task_name" className="text-right">Nom de la tâche :</Label>
                        <Input
                            id="task_name"
                            type="text"
                            {...register("task_name", {
                                required: "Le nom de la tâche est obligatoire",
                                validate: (value) =>
                                    value.trim() !== "" || "Ne peut pas être vide",
                            })}
                            className="col-span-3"
                        />
                        {errors.task_name && (
                            <span className="col-span-4 text-red-500 text-sm text-right">
                                {errors.task_name.message}
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

{taskName && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="is_done" className="text-right">Terminée </Label>
                            <Input
                                type="checkbox"
                                id="is_done"
                                {...register("is_done")}
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