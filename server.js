const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const { REACT_APP_API_KEY, PORT = 4000 } = process.env

mongoose
  .connect(
    `mongodb+srv://admin:${REACT_APP_API_KEY}@cluster0.f3eh5.mongodb.net/capstone-project?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
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
app.use((req, res) => res.sendStatus(404))

// error route
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
