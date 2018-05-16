'use strict';

const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

//Require routes
app.use(require('./config/server-routes'));

app.listen(3000, () => {
    console.log('Serving');
});
