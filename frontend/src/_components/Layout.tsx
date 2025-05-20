
import { SideBar } from './SideBar'
import { Task } from './task/Task'

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">

        <div className="flex flex-1">
            <SideBar />
            <Task />
        </div>
        </div>

    );          
};