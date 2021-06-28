const express = require('express')
const mongoose = require('mongoose')
const KEY = process.env.API_KEY

mongoose
  .connect(
    `mongodb+srv://admin:Judomaster181@cluster0.f3eh5.mongodb.net/capstone-project?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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

// catch all (404)
app.use((req, res) => res.sendStatus(404))

// error route
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`)
})
