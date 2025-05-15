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
        <aside className="h-full bg-gray-800 text-white p-4 ">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul > 
                <li>
                    <Button className="hover:text-blue-500">
                        <Plus className="mr-2 h-4 w-4" />
                        Ajouter une liste
                    </Button>
                 </li>
                <li className="hover:text-blue-500">Toutes les tâches</li>
            </ul>
        </aside>
    );
};