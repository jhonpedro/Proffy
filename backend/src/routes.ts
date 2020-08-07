import express from 'express'
const routes = express.Router()

import classesControler from './controllers/ClassesControler'

routes.post('/classes', classesControler.create)

export default routes