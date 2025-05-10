"use client"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
//Mettre type 
import type { ColumnDef } from "@tanstack/react-table"

export type Task = {
    id: string 
    name: string
    status: "pending" | "success" | "failed" | null
    date : string,
    note : string,
    liste : string

}


//Ce qui va s'afficher
export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "status",
        header: "status",
    },
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
    id: "actions",
    cell: ({ row }) => {
      //  const task = row.original

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                   
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Supprimer la tâche</DropdownMenuItem>
                    <DropdownMenuItem>Modifier la tâche</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
},
  
]


export const data_task: Task[] = [
    {
        id: "728ed52f",
        date: "22/10/2023",
        status: "pending",
        name: "m@bihihu.com",
        note: "Lorem  dolor sit amet, conse",
        liste :"all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "",
        date: "",
        status: null,
        name: "mzrtqzrg",
        note: "", 
        liste: "all"
    }
    ,
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    }
    ,
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    },
    {
        id: "jzbrfiuzefb12345",
        date: "22/10/2023",
        status: "pending",
        name: "m@example.com",
        note: "Lorem",
        liste: "all"
    }

    // ...
]
