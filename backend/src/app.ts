import express from 'express'
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv'

class App {
	app: express.Application

	constructor() {
		this.app = express()
		this.middlewares()
		this.routes()
		dotenv.config()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
	}

	routes() {
		this.app.use(routes)
	}
}

export default new App().app
