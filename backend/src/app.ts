import express from 'express'
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv'
import { resolve } from 'path'

class App {
	app: express.Application

	constructor() {
		this.app = express()
		dotenv.config()
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
		this.app.use(
			'/photo/',
			express.static(resolve(__dirname, '..', 'uploads', 'resized'))
		)
	}

	routes() {
		this.app.use(routes)
	}
}

export default new App().app
