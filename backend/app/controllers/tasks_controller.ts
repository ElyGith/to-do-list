import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'
import { addTaskValidator } from '#validators/addTaskValidator'
import { DateTime } from  "luxon";

export default class TasksController {

    async createTask({ request, response }: HttpContext) {
        
        const data = await request.validateUsing(addTaskValidator)
        //si j'ai pas de verif à faire je peux direct mettre le body 

        const task = await Task.create(data)

        return response.created(task)
    }

    async getTasks({ params,response }:HttpContext) {

        const tasks = await Task.findByOrFail("id",params.name)
        return response.send(tasks)
    }

    async getTaskSearch({request,response}:HttpContext)
    {
        const nom = request.qs().nom // récupère ?search=... dans l'URL
        const searchTask = await Task.query().
        where('task_name', 'like', `%${nom}%`)
        
        return response.send(searchTask)
    }

    async getAllTasks({ response }: HttpContext) {
        const tasks = await Task.all()
        return response.send(tasks)
    }

    async deleteTask({ params,  }:HttpContext) {
        const task = await Task.findOrFail(params.id)
        await task. delete()    
    }

    async updateTask({ params, request, response }:HttpContext) {
        const task = await Task.findOrFail(params.id)
        const data = request.body()
        task.updatedAt = DateTime.now() // Luxon dateTime is used
        task.merge(data)
        await task.save()
        return response.status(200).send(task)
    }


}