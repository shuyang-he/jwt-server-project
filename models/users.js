import mongoose from 'mongoose'

const { Schema } = mongoose
const usersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  data: Object
}, { collection: 'users' })

export default mongoose.model('users', usersSchema)
