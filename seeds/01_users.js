const { jwtEncode, jwtDecode } = require ('../config/jwt');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
            id: 1,
            email: '1@gmail.com',
            password: jwtEncode('123'),
            login: '1',
            jwt_key: jwtEncode('data1'),
        },
        {
            id: 2,
            email: '2@gmail.com',
            password: jwtEncode('123'),
            login: '2',
            jwt_key: jwtEncode('data2'),
            night_mode: true
        },
        {
            id: 3,
            email: '3@gmail.com',
            password: jwtEncode('123'),
            login: '3',
            jwt_key: jwtEncode('data3')
        }
      ]);
    });
};
