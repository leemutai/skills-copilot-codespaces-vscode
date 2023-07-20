// Create web server
// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;
const server = http.createServer(function(req, res) {
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url, true);
    // Get the path
    const path = parsedUrl.pathname;
    // Trim the path
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // Get the query string as an object
    const queryStringObject = parsedUrl.query;
    // Get the HTTP method
    const method = req.method.toLowerCase();
    // Get the headers as an object
    const headers = req.headers;
    // Send the response
    res.end('Hello World\n');
    // Log the request path
    console.log('Request received on path: ' + trimmedPath + ' with method: ' + method + ' and with these query string parameters: ', queryStringObject);
    console.log('Request received with these headers: ', headers);
});
// Start the server
server.listen(port, function() {
    console.log('The server is listening on port ' + port);
});