import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import users from './routes/users'

const PORT = 8000
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/users', users)

const mongoURI = 'mongodb://localhost:27017/project2'
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoCreate: true,
  autoIndex: false
}

app.use('/api/users', users)

mongoose
  .connect(mongoURI, connectOptions, (err, db) => {
    if (err) {
      throw err
    }
    console.log('Connect to MongoDB')
  })
  .then((res) => {
    return app.listen(PORT, () => {
      console.log('Server started on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
