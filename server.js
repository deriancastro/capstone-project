const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const { MONGO_URL, PORT = 4000 } = process.env

const path = require('path')

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB (capstone-project)'))
  .catch(console.error)

// express likes to call the server "app"
const app = express()

// add middleware for json data
app.use('/', express.json())
app.use('/api/users', require('./routes/users'))
app.use('/api/goals', require('./routes/goals'))

app.use(express.static(path.resolve(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

// catch all (404)
app.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})

// error handler
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
