const express = require('express');
const app = express();
const port = 8080;

app.get('/hello', (req, res) => {
    res.send('now Im restarting with alex');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})