blogs = require('../data.json')

module.exports = async (req, res) => {
    if (req.url.match(/\/delete\/([0-9]+)/) ) {
        console.log("Deleting Blog");
        
        const blid = req.url.split('/')[2];
        const index = blogs.findIndex((it) => blid == it.id );

        if (index === -1) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: `Blog with ID ${blid} doesn't exist` }));
			return;
		}

        if(index !== -1) blogs.splice(index, 1);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Blog with id = ${blid} Deleted Successfully`}));
    }



    else if(req.url === '/delete')
    {
        console.log("All blogs deleted");
        
        blogs = [];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'All Blogs deleted Successfully'}));
    }


    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.');
    }
};
