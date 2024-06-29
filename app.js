const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Mukesh\'s Fantasy Store!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
