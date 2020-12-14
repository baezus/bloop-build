const db = require('../models');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const savedUser = await db.User.create(req.body);
    console.log(savedUser);
    return res.status(200).json({
      "status": 200,
      "message": "Successful registration!"
    });
  } catch (err) {
    return res.status(500).json({ 
        "status": 500,
        "message": "Unable to register the User."
      });
    }
};

const login = async (req, res) => {
  db.User.findOne({ 'username': req.body.username },
  (err, foundUser) => {
    if (err) return console.log('Could not find username in the login route.', err);
    else {

      const signedJwt = jwt.sign(
        {
          _id: foundUser._id,
        },
          "bolobrazy",
        {
          expiresIn: "3h",
        }
      );

      let isMatch;
      if (foundUser.password === req.body.password) {
        isMatch = true;
      } else {
        isMatch = false;
      }
      if (!isMatch) {
        res.send('wrong password!');
      } else {
        return res.status(200).json({ 
          status: 200,
          message: "Success",
          id: foundUser._id,
          signedJwt,
        });
      }
    }
  });
}

const show = async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.userId);
    res.status(200).json({ status: 200, data: foundUser });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  register,
  login,
  show
};