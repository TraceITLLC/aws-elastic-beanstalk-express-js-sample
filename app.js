const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my first js script and webapp with CodePipeline and CodeCommit'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
