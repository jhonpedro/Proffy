import express from 'express'

import classesControler from './controllers/ClassesControler'
import connectionsController from './controllers/ConnectionsController'
import userController from './controllers/UsersController'
import loginRequired from './middlewares/auth'

const routes = express.Router()

routes.post('/user', userController.store)
routes.put('/user', loginRequired, userController.update)

routes.post('/user/session', userController.session)
routes.put('/user/photo', loginRequired, userController.updatePhoto)

routes.post('/forgot-password-email', userController.forgotPasswordEmail)
routes.put('/forgot-password-change', userController.forgotPasswordChange)

routes.get('/user-classes', loginRequired, classesControler.show)
routes.get('/classes', classesControler.index)
routes.post('/classes', loginRequired, classesControler.create)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes
