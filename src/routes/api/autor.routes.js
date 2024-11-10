// routes/api/apiAutoresRoutes.js
const router = require('express').Router();
const { getAutores, getAutor, createAutor } = require('../../controllers/autor.controller');

// Obtener todos los autores
router.get('/', getAutores);

// Obtener un autor por ID
router.get('/:autorId', getAutor);

// Crear un nuevo autor
router.post('/', createAutor);

module.exports = router;
