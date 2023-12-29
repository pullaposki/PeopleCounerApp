// Import the necessary modules: The script imports the necessary modules to create and run an HTTP server, 
// handle file system operations, join file paths, etc. The 'http', 'fs', 'path', 'url' modules are 
// Node.js built-in modules.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mimic __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response) => {

    // For each request received, the server sets up the filePath, extension name & mimeType.
    const filePath = path.join(__dirname, request.url === '/' ? '/index.html' : request.url);
    const extensionName = String(path.extname(filePath)).toLowerCase();
    
    // mimeTypes is an object that maps file extensions to their corresponding MIME types. 
    // MIME types define the nature and format of data as type/subtype. 
    // For example, 'text/html' represents HTML documents, 'text/javascript' 
    // represents JavaScript files, and 'text/css' represents cascading style sheet files.
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };
    
    // If the file extension is not in the mimeTypes map 
    // (for example, it could be a different type of file that you didn't define a MIME type for), 
    // it defaults to 'application/octet-stream'.
    const contentType = mimeTypes[extensionName] || 'application/octet-stream';
    
    // The readFile() method is asynchronous and takes in a callback function which is executed once the file has been 
    // read. The callback function takes two arguments: an error object and the actual content of the file.
    fs.readFile(filePath, (error, content) => {
        if (!error) {
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        } else {
            if (error.code === 'ENOENT') {
                response.writeHead(404);
                response.end(`Page not found: ${request.url}`);
            } else {
                response.writeHead(500);
                response.end(`Server error: ${error.code}`);
            }
        }
    });
});

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