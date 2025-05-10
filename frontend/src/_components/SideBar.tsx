import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"


/* Voir plus tard 
const sidebarVariants = {
    open: {
        width: "15rem",
        transition: { duration: 0.3 }

    },
    closed: {
        width: "3.05rem",
        transition: { duration: 0.3 }

    },
};

*/



export const SideBar = () => {
    return (
        <aside className="w-[15rem] sm:w-[20vw] md:w-[15rem] bg-gray-800 text-white p-4 ">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul> 
                <li>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Ajouter une tâche
                    </Button>
                 </li>
                <li>Toutes les tâches</li>
                <li>Aujourd'hui</li>
                <li>Complétées</li>
            </ul>
        </aside>
    );
};