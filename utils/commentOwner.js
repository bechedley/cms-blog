const Comment = require("/models/Comment");
// Function that checks with the session to see if the user created the comment
const commentOwner = (req, res, next) => {
    if (req.session.username === Comment.commentor) {
      return true;
    } else {
      next();
    }
  };
  
  module.exports = commentOwner;