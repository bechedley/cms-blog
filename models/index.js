const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const PostComment = require("./PostComment");

// User can own many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
}); 

// Post belongsTo user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// User can own many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
}); 

// Comment belongsTo user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Posts belongsToMany Comment
Post.belongsToMany(Comment, {
  // Define the third table needed to store the foreign keys
  through: {
    model: PostComment,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "related_comments",
});

// Comments belongsToMany Posts
Comment.belongsToMany(Post, {
  // Define the third table needed to store the foreign keys
  through: {
    model: PostComment,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "commented_posts",
});

module.exports = {
  Post,
  User,
  Comment,
  PostComment,
};
