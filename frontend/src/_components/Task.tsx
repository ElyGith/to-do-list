import { HeaderTask } from "./HeaderTask";
import { DataTable } from "./task/data-table";
import { columns, data_task } from "./task/columns";

export const Task = () => {
    return (
        <main className="flex-1 p-6 overflow-auto">
            <HeaderTask />

            <DataTable columns={columns} data={data_task}/>

        </main>
    );
};