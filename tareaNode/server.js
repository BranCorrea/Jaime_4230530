const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3009;

// Función para manejar las solicitudes de cada ruta
const requestHandler = (req, res) => {
    // Ruta para la página de inicio
    if (req.url === '/') {
        serveFile(res, 'index.html', 'text/html');
    }
    // Ruta para el formulario
    else if (req.url === '/formulario') {
        serveFile(res, 'formulario.html', 'text/html');
    }
    // Ruta para la página de información
    else if (req.url === '/informacion') {
        serveFile(res, 'informacion.html', 'text/html');
    }
    // Ruta para el archivo CSS
    else if (req.url === '/styles.css') {
        serveFile(res, 'styles.css', 'text/css');
    }
    // Si la ruta no coincide, devolver un error 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

// Función para servir archivos de la carpeta `public`
const serveFile = (res, filename, contentType) => {
    const filePath = path.join(__dirname, 'public', filename);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno del servidor');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};

// Crear el servidor y asignarle el manejador de solicitudes
const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}`);
});
