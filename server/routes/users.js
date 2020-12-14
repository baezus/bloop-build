const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/login', ctrl.users.login);
router.post('/register', ctrl.users.register);

module.exports = router;