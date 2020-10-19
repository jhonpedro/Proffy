import express from 'express'
const routes = express.Router()

import classesControler from './controllers/ClassesControler'
import connectionsController from './controllers/ConnectionsController'
import userController from './controllers/UsersController'

routes.post('/user', userController.store)

routes.post('/user/session', userController.session)

routes.post('/forgot-password-email', userController.forgotPasswordEmail)
routes.post('/forgot-password-change', userController.forgotPasswordChange)

routes.get('/classes', classesControler.index)
routes.post('/classes', classesControler.create)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes
