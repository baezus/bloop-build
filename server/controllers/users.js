const db = require('../models');

const register = (req, res) => {
  db.User.create(req.body)
    .then((savedUser) => {
        res.status(201).json({ user: savedUser });
    })
    .catch((err) => {
      console.log('Error in the User registration on the controllers route', err);
      res.json({ Error: 'Unable to register the User.'});
    });
};

const login = (req, res) => {
  db.User.findOne({ 'username': req.body.username },
  (err, foundUser) => {
    if (err) return console.log('Could not find username in the login route.', err);
    else {
      let isMatch;
      if (foundUser.password === req.body.password) {
        isMatch = true;
      } else {
        isMatch = false;
      }
      console.log(foundUser);
      console.log(req.body);
      if (!isMatch) {
        res.send('wrong password!');
      } else {
        res.send('u made it babe! logged in');
      }
    }
  });
}

module.exports = {
  register,
  login
};