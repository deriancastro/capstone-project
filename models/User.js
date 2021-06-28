const mongoose = require('mongoose')

const userSchema = {
  fullName: { type: String, required: true },
  email: {
    type: String,
    match: /.+@\w{2,}\.\w{2,}/i,
    required: true,
    unique: 'email already exists',
  },
  password: { type: String, required: true },
  aboutYou: { type: String, required: true },
  image: { type: String, required: false },
}

module.exports = mongoose.model('User', userSchema)
