const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw new Error(err);
                    }

                    res.end(content);
                }
            )
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw new Error(err);
                    }

                    res.end(content);
                }
            )
        } else if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-Type': 'text/json; charset=utf-8'
            });

            const users = [
                {name: 'Rolla', age: 45},
                {name: 'Elena', age: 29},
            ];

            res.end(JSON.stringify(users));
        }
    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        
        req.on('data', data => {
            body.push(Buffer.from(data))    
        });

        req.on('end', () => {
            console.log('body >>', body.toString());
            const message = body.toString().split('&');

            res.end(`
                <h1>Forma was sent</h1>
                <p>Title: <b>${message[0].split('=')[1]}</b></p>
                <p>Description: <b>${message[1].split('=')[1]}</b></p>
            `);
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running...');
})