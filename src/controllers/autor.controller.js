// controllers/autoresController.js
const { selectAll, selectById, insertAutor } = require('../models/autor.model');

const getAutores = async (req, res, next) => {
    try {
        const autores = await selectAll();
        res.json(autores);
    } catch (error) {
        next(error);
    }
};

const getAutor = async (req, res, next) => {
    const { autorId } = req.params;
    try {
        const autor = await selectById(autorId);
        if (!autor) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        res.json(autor);
    } catch (error) {
        next(error);
    }
};

const createAutor = async (req, res, next) => {
    const { nombre, email, imagen } = req.body;
    try {
        const autorId = await insertAutor({ nombre, email, imagen });
        const autor = await selectById(autorId);
        res.status(201).json(autor);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAutores,
    getAutor,
    createAutor
};
