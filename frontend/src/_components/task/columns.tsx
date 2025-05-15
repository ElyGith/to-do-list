"use client"

//Mettre type 
import type { ColumnDef } from "@tanstack/react-table"

import { ActionsCell } from "./ActionsCell"
import type { Task } from "./Task"

type ColumnsProps = {
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => void;
    handleAdd:(id:Task) => void;

}

//Ce qui va s'afficher
export const columns = ({ handleEdit, handleDelete,handleAdd }: ColumnsProps): ColumnDef<Task>[] => [
    {
        accessorKey: "isDone",
        header: "isDone",
    },
    {
        accessorKey: "taskName",
        header: "Nom",
    },
    {
        accessorKey: "updatedAt",
        header: "updatedAt",
    },
    {
        accessorKey:"liste",
        header:"liste",
    },
    {
    id: "actions",
    header:"options",
    cell: (row) => {
        const task = row.row.original

        return <ActionsCell id={task.id ?? ""} handleEdit={handleEdit} handleDelete={handleDelete} handleAdd={handleAdd} />;
    },
},
  
]







