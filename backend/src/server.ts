import express from 'express'

const app = express()

app.get('/test', (req, res) => {
  res.send('Worked!')
})

app.listen(3030, () => console.log('Server is running on http://localhost:3030'))
