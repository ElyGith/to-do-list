import type { HttpContext } from '@adonisjs/core/http'
import  {registerValidator, loginValidator}  from '#validators/authValidator'
import User from '#models/user'

export default class AuthController {

    async register({ request, response }: HttpContext) {
        const payload = await request.validateUsing(registerValidator)

        const user = await User.create(payload)

        return response.created(user)
    }

    
    async login({ request, response }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator)

        const user = await User.verifyCredentials(email, password)
        const token = await User.accessTokens.create(user)

        return response.ok({
            token: token,
            ...user.serialize(),
        })
      }
      

      async me({ auth,response }: HttpContext) {
        try {
        const user =  auth.getUserOrFail()
        console.log(user)
        console.log(`num 1 => ${user.email}`)
        return response.ok(user)
        } catch (error) {
            return response.unauthorized({error:'User not found'})
        }
      }

    async logout({ auth, response }: HttpContext) {

        const user = auth.getUserOrFail()
        const token = auth.user?.currentAccessToken.identifier
        console.log(auth.authenticationAttempted)
        if (!token) {
            return response.badRequest({ message: 'Token not found' })
        }
        await User.accessTokens.delete(user, token)
        return response.ok({ message: 'Logged out' })

      }
} 