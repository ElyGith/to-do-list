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

export type propSetTaskDialog = {
    taskName: string | null;
    open : boolean;
    setOpen : (value : boolean) => void;
}   

export function SetTaskDialog({ taskName, open,setOpen}: propSetTaskDialog) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            
            <DialogContent className="bg-amber-50 sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Edit task : {taskName} </DialogTitle>
                    <DialogDescription>
                        Modifier votre tâche ici. Appuyer sur sauvegarder quand vous aurez finis

                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nom de la tâche :
                        </Label>
                        <Input id="name" defaultValue="Trouver un stage" className="col-span-3" />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                            Date échéance :
                        </Label>
                        <Input type="date" id="date" defaultValue="@peduarte" className="col-span-3" />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Status" className="text-right">
                            Status :
                        </Label>
                        <Input type="checkbox"id="status" defaultValue="@peduarte" className="col-span-3" />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="note" className="text-right">
                            Note :
                        </Label>
                        <Input type="text" id="note" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae." className="col-span-3" />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="note" className="text-right">
                            Priorité :
                        </Label>
                        <Input type="number" id="priorite" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae." className="col-span-3" />
                    </div>


                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}