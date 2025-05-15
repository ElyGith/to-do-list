import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'
import { addTaskValidator } from '#validators/addTaskValidator'
import { DateTime } from  "luxon";

export default class TasksController {

    async createTask({ request, response }: HttpContext) {
        
        const data = await request.validateUsing(addTaskValidator)

        const task = await Task.create(data)

        return response.created(task)
    }

    async getTasks({ params,response }:HttpContext) {

        const tasks = await Task.findByOrFail("id",params.name)
        return response.send(tasks)
    }

    async getTaskSearch({request,response}:HttpContext)
    {
        const nom = request.qs().nom 
        const searchTask = await Task.query().
        where('taskName', 'like', `%${nom}%`)
        
        return response.send(searchTask)
    }

    async getAllTasks({ response }: HttpContext) {
        const tasks = await Task.all()
        return response.send(tasks)
    }

    async deleteTask({ params, response }:HttpContext) {
        const task = await Task.findOrFail(params.id)
        await task. delete()    

        return response.ok({ message : 'tache supprimée', id : params.id})
    }

    async updateTask({ params, request, response }:HttpContext) {
        const task = await Task.findOrFail(params.id)
        const data = request.body()
        task.updated_at = DateTime.now() 
        task.merge(data)
        await task.save()
        return response.status(200).send(task)
    }


}