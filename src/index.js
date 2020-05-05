const bodyParser = require('body-parser');
const express = require('express');
const { getImages } = require('./utils');

const { PORT } = process.env;

// Initialization of express application
const app = express()

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method");
    next();
  });

// Using bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/v1/media/:id', getImages);
app.get('*', (req, res) => res.sendStatus(200));

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})