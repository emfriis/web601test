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
        const message = parseBody.split('=')[1];
        fs.writeFile('./message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    })

    // res.setHeader('content-type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>WEB601</title></head>');
    // res.write('<body><h1>WEB601</h1></body>');
    // res.write('</hmtl>');
    // res.end();
} // requestHandler ES6 function

exports.handler = requestHandler; // export then call in other file
