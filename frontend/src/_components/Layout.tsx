
import { SideBar } from './SideBar'
import { Task } from './Task'

export const Layout = () => {
    return (
        <div className="flex">

        <div className="flex flex-row h-screen">
            <SideBar />
            <Task />
        </div>
            </div>
    );
          
};