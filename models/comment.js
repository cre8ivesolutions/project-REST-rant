require('dotenv').config()
const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})



// module.exports.Place = require('./places')
// module.exports.Comment = require('./comment')
module.exports = mongoose.model('Comment', commentSchema)

