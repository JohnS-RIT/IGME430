const http = require('http');

//console.dir('hello');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === '/favicon.ico'){
        console.log('favicon request');
    }

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('message from myData');
    response.end();
}

http.createServer(onRequest).listen(port);