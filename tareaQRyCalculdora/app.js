// app.js
const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/router');

// Sirve los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usa el router para las rutas definidas
app.use(router);

// Configura el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
