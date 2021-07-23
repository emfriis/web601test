const fs = require('fs'); // fs

const requestHandler = (req, res) => { // request & response
    const url = req.url; 
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html'); // sets content type to html text
        res.write('<html>');
        res.write('<head><title>Enter a Message</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // signifies end of content
    }

    if (url === '/message' && method === 'post') {
        const body = [];
        req.on('data', chunk => body.push(chunk));
    }

    return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.trim()
    })
} // requestHandler will be an ES6 function
