const express = require('express');
const server = express();

server.use(express.json());

server.get('/user', (req, res) => {
    res.send('<h1>All users data</h1>');
});

server.get('/user/:id', (req, res) => {
    let id = req.params.id;
    res.send(`<h1>${id} user's data</h1>`);
});

server.post('/userlogin', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send('Post request successfully completed');
});

server.get(/.*/, (req, res) => {
    res.status(404).send('Route not found');
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});
