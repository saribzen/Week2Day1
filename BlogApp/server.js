const http = require('http');
const getReq = require('./methods/get-req')
const postReq = require('./methods/post-req')
const putReq = require('./methods/put-req')
const delReq = require('./methods/del-req')



const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        getReq(req, res);
    } 
    else if (req.method === 'POST') {
        postReq(req, res);
    } 
    else if (req.method === 'PUT') {
        putReq(req, res);
    } 
    else if (req.method === 'DELETE') {
        delReq(req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});