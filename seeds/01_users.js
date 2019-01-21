const jwt = require('jsonwebtoken');

const token1 = jwt.sign({data: 'data1'}, 'secret');
const token2 = jwt.sign({data: 'data2'}, 'secret');
const token3 = jwt.sign({data: 'data3'}, 'secret');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
            id: 1,
            email: '1@gmail.com',
            password: '123',
            login: '1',
            jwt_key: token1,
        },
        {
            id: 2,
            email: '2@gmail.com',
            password: '123',
            login: '2',
            jwt_key: token2,
            night_mode: true
        },
        {
            id: 3,
            email: '3@gmail.com',
            password: '123',
            login: '3',
            jwt_key: token3
        }
      ]);
    });
};
