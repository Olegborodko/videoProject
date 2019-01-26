require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

const app = express();
const port = process.env.PORT || 8080;

var fs = require('fs');
var https = require('https');

app.use('/api', require('./api/users'));
app.use('/api', require('./api/words'));
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

https.createServer({
    key: fs.readFileSync('./sslcert/key.pem'),
    cert: fs.readFileSync('./sslcert/cert.pem')
}, app)
.listen(port);
