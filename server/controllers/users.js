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

module.exports = {
  register
};