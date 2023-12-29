// Require the http module
const http = require('http');
const fs = require('fs');
const path = require('path');

// This code is creating an HTTP server. 
// The http.createServer() method returns a new instance of 'http.Server'. 
// This method takes a callback function that is called every time 
// a client sends a request to the server. 
// The callback function has two parameters: request and response.
const server = http.createServer((request, response) => {
    
    // Construct the file path
    const filePath = path.join(__dirname, request.url === '/' ? '/index.html' : request.url);
    const extName = String(path.extname(filePath)).toLowerCase();

    // Map file extensions to MIME types
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        // Add more MIME types depending on your need
    };

    const contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (!error) {
            // If file exists, serve it
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        } else {
            // Error handling
            if (error.code === 'ENOENT') {
                // Handle file not found
                response.writeHead(404);
                response.end(`Page not found: ${request.url}`);
            } else {
                // Handle server error
                response.writeHead(500);
                response.end(`Server error: ${error.code}`);
            }
        }
    });
});

// Listen on port 8080
server.listen(8080, function(error)  {
    if(error){
        console.log("Something went wrong: ", error);
        return;
    }
    
    console.log('Server running at http://localhost:8080/');
});

// Listen for SIGINT signal (Ctrl+C in terminal)
process.on('SIGINT', () => {
    console.log("Caught interrupt signal, server shutting down gracefully...");
    process.exit();
});