const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

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

// Post can have many comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
  }); 
  
  // Comment belongsTo post
  Comment.belongsTo(Post, {
    foreignKey: "post_id",
  });

module.exports = {
  Post,
  User,
  Comment,
};
