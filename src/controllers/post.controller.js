// Example controller
// controllers/postsController.js
const { selectAll, selectById, insertPost, selectPostsByAuthor } = require('../models/post.model');

const getPosts = async (req, res, next) => {
    try {
        const posts = await selectAll();
        res.json(posts);
    } catch (error) {
        next(error);
    }
};

const getPost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const post = await selectById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
};

const createPost = async (req, res, next) => {
    const { titulo, descripcion, categoria, autor_id } = req.body;
    try {
        const postId = await insertPost({ titulo, descripcion, categoria, autor_id });
        const post = await selectById(postId);
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

const getPostsByAuthor = async (req, res, next) => {
    const { autorId } = req.params;
    try {
        const posts = await selectPostsByAuthor(autorId);
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No hay posts para este autor' });
        }
        res.json(posts);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    getPostsByAuthor
};
