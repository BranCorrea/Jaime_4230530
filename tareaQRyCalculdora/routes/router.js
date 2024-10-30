// routes/router.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para la página de inicio (index.html)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Ruta para la página de QR (qr.html)
router.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'qr.html'));
});

// Ruta para la página de calculadora (calculadora.html)
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

module.exports = router;
