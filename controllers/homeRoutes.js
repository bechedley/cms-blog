const router = require("express").Router();
const {
  Post,
  Comment,
} = require("../models");
const withAuth = require("../utils/auth");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.redirect("/homepage");
});

router.get("/login", (req, res) => {
    res.redirect("/login");
    return;
  });

router.get("/homepage", async (req, res) => {
  try {

    const postData = await Post.findAll({
        include: Comment,
        order: [["post_created", "ASC"]],
    });

    let posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
        include: Comment,
    });

    const post = postData.get({ plain: true });
    res.render("post", { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id},
            include: Comment,
            order: [["post_created", "ASC"]],
        });
  
        let posts = postData.map((post) => post.get({ plain: true }));

        res.render("dashboard", {
          posts
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("auth", { login: true });
});

module.exports = router;
