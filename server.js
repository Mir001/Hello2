const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    } else if(req.url === '/search')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('This is search page\n');
	} else if(req.url === '/sendinfo')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('Upload your information\n');
	} else if(req.url === '/getinfo')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('Get your information from the website\n');
	} else if(req.url === '/dailynews')
	{
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('News from all over the world\n');
	} else
	{
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
});

httpServer.listen(3001);