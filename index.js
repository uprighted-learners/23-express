const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// middleware for logging time
function logTime(req, res, next) {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    next();
}

// GET - / - returns a greeting
app.get('/', logTime, (request, response) => {
    response.send('Hey Joe!');
})

// GET - /hello - returns a greeting
app.get('/hello', logTime, (req, res) => {
    res.send('now Im restarting with alex');
})

// GET - /api/v1/health - shows API is healthy
app.get('/api/v2/health', (req, res) => {
    res.send('I am healthy!');
})

// GET - /api/hello/:name - returns a greeting for the name provided
app.get('/api/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
})

// POST - /login - get url encoded body
app.post('/login', logTime, (req, res) => {
    res.send("welcome " + req.body.username);
})

// POST - /api/users - get JSON bodies
app.post('/api/users', (req, res) => {
    res.status(200).json(req.body);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})