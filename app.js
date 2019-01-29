require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

const app = express();
const port = process.env.PORT || 8080;

const fs = require('fs');
const https = require('https');

const bodyParser = require('body-parser');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passport.ExtractJwt;

const knex = require('./knexfile');

const cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};

const passportOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET
}

// const User = knex.extend({
//    tableName: 'users',
//    hasSecurePassword: true
// });

const strategy = new JwtStrategy(passportOptions, (jwt_payload, done) => {
    console.log(jwt_payload);
    console.log(done);
    // User.forge({ id: payload.id }).fetch().then(res => {
    //     next(null, res);
    // });
});

passport.use(strategy);
app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', require('./api/users'));
app.use('/api', require('./api/words'));
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

https.createServer({
    key: fs.readFileSync('./sslcert/key.pem'),
    cert: fs.readFileSync('./sslcert/cert.pem')
}, app)
.listen(port);
