
import { SideBar } from './SideBar'
import { Task } from './Task'

export const Layout = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <Task />
        </div>
    );          
};