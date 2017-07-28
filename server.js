/*jshint esversion:6*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));

let db = require('./models');
let Users = db.Users;
//returns class/user model

app.post('/users', function (req, res) {
  Users.create({ username: req.body.username })
  //.create build and save
  //USER model and class user
  //creating instances of users in JS and DB
  .then(function (user) {
    res.json(user);
    //return created user
  });
});

app.get('/users', function(req, res) {
  Users.findAll()
  .then(function (users) {
    res.json(users);
  });
});

app.get('/', (req,res) => {
  res.send('hello bruh~');
});

app.listen(PORT, () => {
  db.sequelize.sync();
  process.stdout.write(`Listening on ${PORT}`);
});