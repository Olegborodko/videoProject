const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.bcryptHash = async (password) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            return hash || false;
        });
    });
    // var salt = bcrypt.genSaltSync(saltRounds);
    // var hash = bcrypt.hashSync(password, salt);
    // return hash;
}

module.exports.bcryptCheck = async (password, hash) => {
    bcrypt.compare(password, hash, function(err, res) {
        return res;
    });
}