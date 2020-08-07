import express from 'express'
const routes = express.Router()

import classesControler from './controllers/ClassesControler'
import connectionsController from './controllers/ConnectionsController'

routes.get('/classes', classesControler.index)
routes.post('/classes', classesControler.create)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes