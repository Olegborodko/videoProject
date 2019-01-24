require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

const app = express();
const port = process.env.PORT || 8080;

app.use('/api', require('./api/users'));
app.use('/api', require('./api/words'));
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);
