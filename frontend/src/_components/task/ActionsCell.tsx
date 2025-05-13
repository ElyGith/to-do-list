import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type ActionsCellProps = {
    id : string
    handleEdit: (id: string) => void;
};



export const ActionsCell = ({id, handleEdit}: ActionsCellProps) => {
    return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="bg-white shadow-md border z-40">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Supprimer</DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleEdit(id)}>
          Modifier la tâche
        </DropdownMenuItem>

        <DropdownMenuItem>Autre action</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
    );

}
