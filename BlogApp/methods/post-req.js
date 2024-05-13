blogs = require('../data.json')

module.exports = async (req, res) => {
    if (req.url === '/create') {
        console.log("Creating New Blog");
        
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            })

        req.on('end', () => {
            const newItem = JSON.parse(body);
            blogs.push(newItem);
        })
        
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: 'Item created Successfully'}));
    } 

    

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.');
    }
};
