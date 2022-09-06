const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  watched: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Movie', MovieSchema)
