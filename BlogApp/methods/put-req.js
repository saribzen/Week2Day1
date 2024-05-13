blogs = require('../data.json')

module.exports = (req, res) => {
    if (req.url.match(/\/update\/([0-9]+)/) ){

        const blid = req.url.split('/')[2];
        const index = blogs.findIndex((it) => blid == it.id );

        if (index === -1) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: `Blog with ID ${blid} doesn't exist` }));
			return;
		}

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
            })

        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            blogs[index] = updatedItem;
        })

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Blog with id = ${blid} Updated Successfully`}));
    }


    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.');
    }
};