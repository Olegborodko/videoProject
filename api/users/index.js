var express = require('express');
var router = express.Router();

router.get('/users', function (req, res) {
    res.send('Hello World!');
});

module.exports = router;