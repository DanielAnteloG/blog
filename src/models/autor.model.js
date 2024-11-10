// models/autorModel.js
const pool = require('../config/db');

async function selectAll() {
    const [result] = await pool.query('SELECT * FROM autores');
    return result;
}

async function selectById(autorId) {
    const [result] = await pool.query('SELECT * FROM autores WHERE id = ?', [autorId]);
    return result.length ? result[0] : null;
}

async function insertAutor({ nombre, email, imagen }) {
    const [result] = await pool.query(
        'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
        [nombre, email, imagen]
    );
    return result.insertId;
}

module.exports = {
    selectAll,
    selectById,
    insertAutor
};
