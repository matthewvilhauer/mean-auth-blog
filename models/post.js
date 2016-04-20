var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  created: { type: Date, default: Date.now },
  title: String,
  content: String
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
