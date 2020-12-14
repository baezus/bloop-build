const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/', ctrl.users.register);

module.exports = router;