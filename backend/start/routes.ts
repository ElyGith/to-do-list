/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import  AuthController  from '#controllers/auth_controller'

router.get('/', () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.post('register', [AuthController, 'register'])
}).prefix('user')




router.get('/posts/:id', ({ params }) => {
  return `This is post with id ${params.id}`
})