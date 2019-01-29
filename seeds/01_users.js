const { jwtEncode, jwtDecode } = require ('../config/jwt');
const { bcryptHash } = require ('../config/bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
            id: 1,
            email: '1@gmail.com',
            password: bcryptHash('123'),
            login: '1',
            jwt_key: jwtEncode('data1'),
        },
        {
            id: 2,
            email: '2@gmail.com',
            password: bcryptHash('456'),
            login: '2',
            jwt_key: jwtEncode('data2'),
            night_mode: true
        },
        {
            id: 3,
            email: '3@gmail.com',
            password: bcryptHash('789'),
            login: '3',
            jwt_key: jwtEncode('data3')
        }
      ]);
    });
};
