import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"


type HeaderTaskProps = {

    handleAdd:() => void;
}

export const HeaderTask = ({handleAdd}:HeaderTaskProps) => {
    return (
        <h1 className="text-2xl font-semibold mb-4">Mes tâches
            <Button className="hover:text-blue-600" onClick={()=>handleAdd()}>
                <Plus className="mr-2 h-4 w-4" />
                Ajouter une tâche
            </Button>


        </h1>
    )
}