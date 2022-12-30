const router = require("express").Router();
const {
  Post,
  Comment,
  User
} = require("../../models");
const withAuth = require("../../utils/auth");

// Route that deletes a specified post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the title of the specified post
router.put("/:id/title", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
        
      },
    });

    if (!postData) {
      res.status(404).json({
        message: "Error when trying to update the post title!",
      });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the text of the specified post
router.put("/:id/text", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!postData[0]) {
      res
        .status(404)
        .json({ message: "Error when trying to update the blog post!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/comment", async (req, res) => {
  try {
      // Get all posts and JOIN with user data
      const commentData = await Comment.findAll({
        where: {
          post_id: req.params.id
        },
        include: [
          {
            model: User,
            attributes: { exclude: ['password'] },

          },
          {
            model: Post,
        },
        ],
        order: [["comment_created", "ASC"]],
  });

  // Serialize data so the template can read it
  const comments = commentData.map((comment) => comment.get({ plain: true }));

  // Pass serialized data and session flag into template
  res.render('post', { 
      comments, 
      logged_in: req.session.logged_in,
      userCurrent: req.session.user_id

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comment/:id', async (req, res) => {
  try {
      const commentData = await Comment.findByPk(req.params.id, {
          include: [
              {
                  model: User,
                  attributes: { exclude: ['password'] },
              },
          ],
      });

      const comment = commentData.get({ plain: true });

      res.render('post', {
          ...comment,
          logged_in: req.session.logged_in,
          userCurrent: req.session.user_id
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

// Route that adds a new comment to the specified project
router.post("/:pid/:id/comment", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
        ...req.body,
        post_id: req.params.id,
        commentor_id: req.session.user_id,
      });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route that deletes a specified comment
router.delete("/:pid/comment/:cid", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.cid,
        commentor_id: req.session.user_id
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the comment of a project
router.put("/:pid/comment/:cid", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
        where: {
          id: req.params.cid,
          commentor_id: req.session.user_id,
          post_id: req.params.pid
        },
      });

    if (!commentData) {
      res
        .status(404)
        .json({ message: "Error when trying to update the comment!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that adds a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
