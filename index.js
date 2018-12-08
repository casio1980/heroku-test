const http = require('http');
const port = process.env.PORT;

http.createServer((request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
}).listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`Listening on port ${port}`);
});
