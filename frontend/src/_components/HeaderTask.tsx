import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"


export const HeaderTask = () => {
    return (
        <h1 className="text-2xl font-semibold mb-4">Mes tâches
            <Button>
                <Plus className="mr-2 h-4 w-4" />
                Ajouter une tâche
            </Button>


        </h1>
    )
}