import type  {Task}  from "../_components/task/Task.tsx" 


const APIurl = "http://localhost:3333"

export const callGetTaskSearch = async (): Promise<Task[]> => {
    const res = await fetch(`${APIurl}/task/search`)
    return await res.json()
}

export const callGetTasks = async (): Promise<Task[]> => {
    const res = await fetch(`${APIurl}/task/id`)
    return await res.json()
}


export const callGetAllTasks = async (): Promise<Task[]> => {
    const res = await fetch(`${APIurl}/task`)
    return await res.json()
}



export const callCreateTask = async (task: Task): Promise<Task> => {
    const res = await fetch(`${APIurl}/task`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
    if (!res.ok) {
        const error = await res.json();
        console.error("Erreur backend :", error);
      }
    return await res.json()
}
  
export const callDeleteTask = async (id:string): Promise<Task> => {
    const res = await fetch(`${APIurl}/task/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    if (!res.ok) {
        throw new Error('Erreur lors de la suppression')
    }
    
    return await res.json()
}

export const callUpdateTask = async (task: Partial<Task>): Promise<Task> => {
    const res = await fetch(`${APIurl}/task/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
    return await res.json()
}
/*
export const callGetNameById = async(id:string)=>{
    const res = await
}
    */