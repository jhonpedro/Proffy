import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(3030, () => console.log('Server is running on http://localhost:3030'))
