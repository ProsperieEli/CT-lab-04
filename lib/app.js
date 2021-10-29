const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/') {
      socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));

    } else if(request.method === 'GET' && request.path === '/red') {
      socket.write(createResponse({ status: '200 OK',
        contentType: 'text/html',
        body: 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Dog!</title>
        </head>
        <body>
          <h1>red</h1>
        </body>
        </html>`
          
      }));

    } else if(request.method === 'GET' && request.path === '/green') {
      socket.write(createResponse({ status: '200 OK',
        contentType: 'text/html',
        body: 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Dog!</title>
        </head>
        <body>
          <h1>green</h1>
        </body>
        </html>`
          
      }));
    } else if(request.method === 'GET' && request.path === '/blue') {
      socket.write(createResponse({ status: '200 OK',
        contentType: 'text/html',
        body: 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Dog!</title>
        </head>
        <body>
          <h1>blue</h1>
        </body>
        </html>`
          
      }));
    } else if(request.method === 'POST' && request.path === '/echo' && request.body === '') {
      socket.write(createResponse({
        status: '200 OK', 
        contentType: 'text/html',
      }));
    }
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
