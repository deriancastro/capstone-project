const mongoose = require('mongoose')

const goalSchema = {
  text: { type: String },
  isChecked: { type: Boolean },
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
}

module.exports = mongoose.model('Goal', goalSchema)
