const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Great post.",
    comment_created: '2022-11-1',
    commentor_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Thanks for sharing",
    comment_created: '2022-11-10',
    commentor_id: 5,
    post_id: 1,
  },
  {
    comment_text: "I love online shopping!",
    comment_created: '2022-2-8',
    commentor_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Looking forward to more.",
    comment_created: '2022-9-15',
    commentor_id: 5,
    post_id: 3,
  },
  {
    comment_text: "Thanks for sharing",
    comment_created: '2022-6-16',
    commentor_id: 1,
    post_id: 4,
  },
  {
    comment_text: "Do you agree?",
    comment_created: '2022-12-03',
    commentor_id: 4,
    post_id: 5,
  },
  {
    comment_text: "Good post.",
    comment_created: '2022-12-03',
    commentor_id: 1,
    post_id: 5,
  },
  {
    comment_text: "I have some edits to suggest",
    comment_created: '2022-12-04',
    commentor_id: 5,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;