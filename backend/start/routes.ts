/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '#models/user'
import  AuthController  from '#controllers/auth_controller'
import TasksController from '#controllers/tasks_controller'
import { middleware } from './kernel.js'


router.group(() => {
  router.post('register', [AuthController, 'register'])
  router.post('login', [AuthController, 'login'])
  router.post('logout', [AuthController, 'logout']).use(middleware.auth())



  router.post(':id/tokens', async ({ params }) => {
    const user = await User.findOrFail(params.id)
    const token = await User.accessTokens.create(user)

    return {
      type: 'bearer',
      value: token.value!.release(),
    }
  })
  router.get('me', [AuthController, 'me']).use(middleware.auth())
}).prefix('user')

router.group(()=> {
  router.get("/search", [TasksController, 'getTaskSearch'])
  router.get(':name', [TasksController, 'getTasks'])
  router.get("/", [TasksController, 'getAllTasks'])

  router.post('/', [TasksController, 'createTask'])
  router.put('/:id', [TasksController, 'updateTask'])
  router.delete('/:id', [TasksController, 'deleteTask'])

})
.prefix('task')


