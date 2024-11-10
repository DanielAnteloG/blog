// routes/api/apiPostsRoutes.js
const router = require('express').Router();
const { getPosts, getPost, createPost, getPostsByAuthor } = require('../../controllers/post.controller');

// Obtener todos los posts
router.get('/', getPosts);

// Obtener un post por ID
router.get('/:postId', getPost);

// Crear un nuevo post
router.post('/', createPost);

// Obtener posts de un autor específico
router.get('/autor/:autorId', getPostsByAuthor);

module.exports = router;
