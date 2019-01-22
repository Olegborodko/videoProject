require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use('/api', require('./api/users'));
app.use('/api', require('./api/words'));

app.listen(port);
