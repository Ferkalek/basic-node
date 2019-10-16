const http = require('http');

const server = http.createServer((req, res) => {
    console.log('....', req.url);

    res.write(`<div class="main">
        <h1>My title</h1>
        <p class="description">New format</p>
    </div>`);

    // res.end(); // 1 variant metchoda end

    res.end(`
        <div style="border: 1px solid red; padding: 30px; text-align: center;">The end!</div>
    `);
});

server.listen(3000, () => {
    console.log('Server is running...');
})