"use client"

//Mettre type 
import type { ColumnDef } from "@tanstack/react-table"

import { ActionsCell } from "./ActionsCell"

export type Task = {
    id: string 
    name: string
    status: "pending" | "success" | "failed" | null
    date : string,
    note? : string,
    liste? : string

}


//Ce qui va s'afficher
export const columns = (handleEditvar: (id: string) => void): ColumnDef<Task>[] => [
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
    cell: (row) => {
        const task = row.row.original

        return <ActionsCell id={task.id} handleEdit={handleEditvar} />;
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
