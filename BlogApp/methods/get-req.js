blogs = require('../data.json')

module.exports = (req, res) => {
    if (req.url === '/') {
        console.log('Home');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(blogs));
    } 


    else if (req.url.match(/\/([0-9]+)/) ){

        const blid = req.url.split('/')[1];
        let data = blogs.filter((it) => blid == it.id );
        
        if (!data) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: `Blog with ID ${blid} doesn't exist` }));
			return;
		}

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } 


    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About us: We are JavaScript Coders.');
    } 


    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.');
    }
};