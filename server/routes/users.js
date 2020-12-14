const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

router.post('/login', ctrl.users.login);
router.post('/register', ctrl.users.register);
router.get('/user', authRequired, ctrl.users.show);

module.exports = router;