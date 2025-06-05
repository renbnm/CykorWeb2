const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: '서버 에러' });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: '게시글 없음' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: '서버 에러' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: '작성 실패' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: '게시글 없음' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: '수정 실패' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: '게시글 없음' });
    res.status(204).end(); // 성공, 내용 없음
  } catch (err) {
    res.status(400).json({ error: '삭제 실패' });
  }
};
