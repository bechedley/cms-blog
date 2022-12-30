const Post = require("/models/Post");
// Function that checks with the session to see if the user created the comment
const postOwner = (req, res, next) => {
    if (req.session.username == Post.author) {
      return true;
    } else {
      next();
    }
  };
  
  module.exports = postOwner;