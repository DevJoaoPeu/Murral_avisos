const express = require("express");
const bodyParser = require("body-parser");
const post = require("../model/posts");
const router = express.Router();

router.get("/all", (req, res) => {
  res.json(JSON.stringify(post.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  post.newPosts(title, description);

  res.send("Post adicionado");
});

router.delete("/all/:index", (req, res) => {
  const { index } = req.params;

  post.deletePosts(index);
  return res.json({ msg: "O item foi deletado" });
});

module.exports = router;
