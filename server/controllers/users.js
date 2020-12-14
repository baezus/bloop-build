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
  db.User.findOne({ 'username': req.username },
  (err, foundUser) => {
    if (err) return console.log('Could not find username in the login route.', err);
    else {
      let isMatch = (foundUser.password === req.password);
      if (isMatch) {
        res.send('u made it babe; logged in');
      } else {
        res.send('wrong password!');
      }
    }
  });
}

module.exports = {
  register,
  login
};