var express = require('express');
var router = express.Router();

router.get('/words', function (req, res) {
    res.send('Hello words!');
});

module.exports = router;