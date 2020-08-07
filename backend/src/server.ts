import express from 'express'

const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
  res.json({ test: "ok!" })
})

app.listen(3030, () => console.log('Server is running on http://localhost:3030'))
