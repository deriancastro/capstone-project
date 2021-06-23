const mongoose = require('mongoose')

const goalSchema = {
  text: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
}

module.exports = mongoose.model('Goal', goalSchema)
