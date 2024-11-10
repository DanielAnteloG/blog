// models/postModel.js
const pool = require('../config/db');

async function selectAll() {
    const [result] = await pool.query(`
        SELECT posts.*, autores.nombre, autores.email, autores.imagen
        FROM posts
        JOIN autores ON posts.autor_id = autores.id;
    `);
    return result;
}

async function selectById(postId) {
    const [result] = await pool.query(`
        SELECT posts.*, autores.nombre, autores.email, autores.imagen
        FROM posts
        JOIN autores ON posts.autor_id = autores.id
        WHERE posts.id = ?;
    `, [postId]);
    return result.length ? result[0] : null;
}

async function insertPost({ titulo, descripcion, categoria, autor_id }) {
    const [result] = await pool.query(
        'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
        [titulo, descripcion, categoria, autor_id]
    );
    return result.insertId;
}

async function selectPostsByAuthor(autorId) {
    const [result] = await pool.query(`
        SELECT posts.*, autores.nombre, autores.email, autores.imagen
        FROM posts
        JOIN autores ON posts.autor_id = autores.id
        WHERE autores.id = ?;
    `, [autorId]);
    return result;
}

module.exports = {
    selectAll,
    selectById,
    insertPost,
    selectPostsByAuthor
};
